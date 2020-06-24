import { resolveWithTimeout } from "../../../utils/TestUtils";

import getPostsResponse from '../../fixtures/getPopstsResponse.json'
import PostsService from ".";

class PostsFixtureService implements PostsService {
    getPostsAPI() {
        return resolveWithTimeout(getPostsResponse)
    }
}

export default PostsFixtureService