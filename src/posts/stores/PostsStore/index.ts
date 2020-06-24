import { observable, action } from "mobx";
import { APIStatus, API_INITIAL } from "@ib/api-constants";
import PostModel from "../models/PostsModel";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import PostsService from "../../services/PostsService";

class PostsStore {
    postsService: PostsService
    @observable getPostsListAPIStatus!: APIStatus
    @observable getPostsListAPIError!: Error | null
    @observable posts!: Array<PostModel>

    constructor(postService: PostsService) {
        this.postsService = postService
        this.init()
    }

    @action.bound
    init() {
        this.getPostsListAPIStatus = API_INITIAL
        this.getPostsListAPIError = null
        this.posts = []
    }

    @action.bound
    setGetPostsListAPIStatus(status) {
        this.getPostsListAPIStatus = status
    }

    @action.bound
    setGetPostsListAPIError(error) {
        this.getPostsListAPIError = error
    }

    @action.bound
    setPostsListResponse(response) {
        this.posts = response.map(post => {
            return new PostModel(post)
        })

        console.log("postsList in store:", this.posts)
    }

    @action.bound
    getPostsList() {
        const getPostsPromise = this.postsService.getPostsAPI()
        return bindPromiseWithOnSuccess(getPostsPromise)
            .to(this.setGetPostsListAPIStatus, this.setPostsListResponse)
            .catch(this.setGetPostsListAPIError)
    }
}

export default PostsStore