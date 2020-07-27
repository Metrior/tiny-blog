import React, {useState, useRef, useContext} from 'react';

import {PostContext} from "../PostProvider/PostProvider";
import {Input} from "./BlogMainInput.styled";

const BlogMainInput = () => {

    const [text, setText] = useState("");
    const [posts, setPosts] = useContext(PostContext)
    const inputRef = useRef();

    const sendPost = (e) => {
        if (e.key === 'Enter') {
            setPosts(prevPosts => [...prevPosts, {id:new Date().getUTCMilliseconds(), text: text}])
            setText("")
            inputRef.current.focus();
        }
    }

    const inputText = (e) => {
        setText(e.target.value)
    }

    return (
        <Input
            ref={inputRef}
            type="text"
            value={text}
            onChange={inputText}
            onKeyPress={sendPost}
            maxlength="10"
            placeholder="Type here"
        />
    );
};

export default BlogMainInput;
