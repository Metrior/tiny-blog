import styled from "styled-components";

const Button = styled.button `
    background-color: #B22222;
    color: red;
    width: 35px;
    height: 35px;
    border-radius: 25px;
    
    display: flex;
    justify-content: center;
    align-items:center;
    align-self: flex-start;
    
    outline: none;
    
    &:hover {
        cursor:pointer;
        background-color: #DC143C;
    }
    
    margin: 5px 10px;
`;

const Image = styled.img `
    width:20px;
    height:20px;
`;

export {Button, Image}
