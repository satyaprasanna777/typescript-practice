import React from 'react';
import PostModel from "../../stores/models/PostsModel";

type PostProps = {
    post: PostModel
}

class Post extends React.Component<PostProps> {
    render() {

        const { post } = this.props
        return (
            <div>
                <p>{post.title.toUpperCase()}</p>
                <p>{post.body}</p>
            </div>
        )
    }
}

export default Post