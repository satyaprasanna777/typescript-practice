import React from 'react'
import PostsList from '../../components/PostsList/PostsList'
import LoadingWrapperWithFailure from '../../components/common/LoadingWrapperWithFailure'
import { inject, observer } from 'mobx-react'
import PostsStore from '../../stores/PostsStore'

interface PostsRouteProps {}

interface InjectedProps extends PostsRouteProps {
  postStore: PostsStore
}

@inject('postStore')
@observer
class PostsRoute extends React.Component<PostsRouteProps> {
  componentDidMount() {
    this.getPosts()
  }

  getInjectedProps = (): InjectedProps => this.props as InjectedProps

  getPostsStore = () => {
    return this.getInjectedProps().postStore
  }

  getPosts = () => {
    this.getPostsStore().getPostsList()
  }

  renderSuccessUI = observer(() => {
    const { posts } = this.getPostsStore()
    return <PostsList posts={posts} />
  })

  render() {
    const { getPostsListAPIStatus, getPostsListAPIError } = this.getPostsStore()
    return (
      <div>
        <LoadingWrapperWithFailure
          apiStatus={getPostsListAPIStatus}
          apiError={getPostsListAPIError}
          renderSuccessUI={this.renderSuccessUI}
          onRetryClick={this.getPosts}
        />
      </div>
    )
  }
}

export default PostsRoute
