import React, {useContext} from 'react';

import Post from "../Post";
import {PostContext} from "../PostProvider/PostProvider";
import {PostsWrapper} from "./PostsList.styled";

const PostsList = ({}) => {

    const [posts, setPosts] = useContext(PostContext)

    return (
        <PostsWrapper>
            {
                posts.map(post=>(
                    <Post key={post.id} post={post}/>
                ))
            }
        </PostsWrapper>
    );
};

export default PostsList;
