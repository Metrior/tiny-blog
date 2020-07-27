import React from 'react';

import {PostWrapper, MessageWrapper, Avatar, TextWrapper, Title, Text} from "./Post.styled";
import DeleteButton from "../common/DeleteButton";
import avatar from "../../assets/avatar.jpg"

const Post = ({post}) => {
    return (
        <PostWrapper>
            <MessageWrapper>
                <Avatar src={avatar}/>
                <TextWrapper>
                    <Title>Cool Blogger</Title>
                    <Text>{post.text}</Text>
                </TextWrapper>
            </MessageWrapper>
            <DeleteButton id={post.id}/>
        </PostWrapper>
    );
};

export default Post;
