import styled from "styled-components";


export const Container = styled.div`
`;

export const TicketInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 -20px;
    padding: 0 20px;
    background-color: #f2f2f2;
`;

export const TicketId = styled.div`
    span {
            font-weight: 600;
        }
`;

export const Title = styled.h2`
    margin: 0;
    margin: 10px 20px;
`;

export const TicketWrapper = styled.div`
    border: 3px solid #f2f2f2;
    padding: 0px 20px;
    border-radius: 10px;
`;

export const Desctiption = styled.div`
  margin: 15px 0;
`;

export const DataCreated = styled.span`
    span {
            font-weight: 600;
    }
`;

export const TicketStatus = styled.div`
    span {
        font-weight: 600;
    }
`;

export const UserInfo = styled.div`
    display: block;
    margin: 20px 0;
`;

export const UserName = styled.div`
    margin-left: 20px;
`;

export const CloseButton = styled.button`
    font-size: 16px;
    display: flex;
    margin: 20px;
    padding: 10px;
    border: 1px solid rgb(84, 22, 22);
    border-radius: 7px;
    font-weight: 600;
    color: #000;
    background-color: #fff;
    cursor: pointer;
    &:hover{
        transform: scale(0.98);
    }
`;

export const DeleteButton = styled(CloseButton)`
    border: 1px solid rgb(0, 0, 0);
    &:hover {
        border: 1px solid rgb(255, 76, 76);
        color: rgb(255, 76, 76);
        transition: 0.5s ease;
        background-color: black;
        transform: scale(0.98);
    }
`;

export const ReopenButton = styled(CloseButton)`
    border: 1px solid rgb(0, 0, 0);
    &:hover {
        border: 1px solid rgb(70, 146, 191);
        color: rgb(70, 146, 191);
        transition: 0.5s ease;
        background-color: black;
        transform: scale(0.98);
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
`;