import { create } from 'apisauce'

import { apiMethods } from '../../../constants/APIConstants'
import { POSTS_BASE_URL } from '../../constants/EnvironmentConstants'
import { networkCallWithApisauce } from '../../../utils/APIUtils'

import { endPoints } from '../endPoints'

import PostsService from '.'

class PostsApiService implements PostsService {
  api: Record<string, any>

  constructor() {
    this.api = create({
      baseURL: POSTS_BASE_URL
    })
  }

  async getPostsAPI() {
    return networkCallWithApisauce(
      this.api,
      endPoints.postsList,
      {},
      apiMethods.get
    )
  }
}

export default PostsApiService
