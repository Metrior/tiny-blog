import React, {useContext} from 'react';

import {Button, Image} from "./DeleteButton.styled";

import deleteIcon from "../../../assets/deleteIcon.svg"
import {PostContext} from "../../PostProvider/PostProvider";

const DeleteButton = ({id}) => {

    const [posts, setPosts] = useContext(PostContext)

    const clickHandler = () => {
        setPosts(posts.filter(post => post.id !== id));
    }

    return (
        <Button onClick={()=>clickHandler()}>
            <Image src={deleteIcon}/>
        </Button>
    );
};

export default DeleteButton;
