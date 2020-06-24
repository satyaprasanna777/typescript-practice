import { PostObject } from '../../stores/types'

interface PostsService {
  getPostsAPI: () => Promise<Array<PostObject>>
}

export default PostsService
