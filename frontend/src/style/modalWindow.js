import styled from "styled-components"; 
import { CloseButton } from "./ticketStyle";

const AddBtn = styled(CloseButton)`
    font-weight: 700;
    font-size: 16px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
`;

const TextAreaNote = styled.textarea`
    width: 550px;
    height: 150px;
    padding: 5px 7px;
    margin: 0 10px; 
`;

const Xbtn = styled.button`
    margin: 10px;
    border: 1px solid black;
    padding: 5px 10px;
    border-radius: 5px;
    background: none;
    color: #000;
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 16px;
    cursor: pointer;
    &:hover {
        transform: scale(0.98);
    }
`;

export  {
    AddBtn,
    TextAreaNote,
    Xbtn,
}