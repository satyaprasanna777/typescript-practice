import { observable } from 'mobx'
import { PostObject } from '../../types'

class PostModel {
  id: number
  @observable title: string
  @observable body: string

  constructor(post: PostObject) {
    this.id = post.id
    this.title = post.title
    this.body = post.body
  }
}

export default PostModel
