import React from 'react';
import PostModel from "../../stores/models/PostsModel";
import Post from "../Post/Post";

type PostsListProps = {
    posts: Array<PostModel>
}


class PostsList extends React.Component<PostsListProps> {

    render() {
        const { posts } = this.props
        return (
            posts.map(eachPost => <Post post={eachPost} />)
        )
    }
}

export default PostsList