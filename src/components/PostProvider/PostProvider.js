import React, {useState, createContext} from 'react';

export const PostContext = createContext()

export const PostProvider = (props) => {

    const [posts, setPost] = useState([
        {
            id:0,
            text:"Today is a wonderful day"
        },
        {
            id: 1,
            text: "Going shopping"
        },
        {
            id: 2,
            text: "Party all night long"
        }
    ])

    return (
        <PostContext.Provider
            value={[posts, setPost]}
        >
            {props.children}
        </PostContext.Provider>
    );
};
