import PostsStore from './PostsStore'
import PostService from '../services/PostsService/index.api'

const postStore = new PostsStore(new PostService())

const stores = {
  postStore
}

export default stores
