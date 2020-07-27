import styled from "styled-components";

const PostWrapper = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    width: 600px;
    border-radius: 25px;
    border: 1px solid;
    
    background: white;
    
    margin-bottom: 10px;
`;

const MessageWrapper = styled.div `
    display: flex;
    flex-direction: row;
`;

const Avatar = styled.img `
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid;
    
    top:0;
    margin: 5px 10px;
`;

const TextWrapper = styled.div `
    display: flex;
    flex-direction: column;
    padding: 10px 0;
`;

const Title = styled.div `
    font-weight: bold;
`;

const Text = styled.div `
    max-width: 450px;
`;

export {PostWrapper, MessageWrapper, Avatar, TextWrapper, Title, Text}
