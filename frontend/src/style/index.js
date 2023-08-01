import styled from "styled-components";

const ReverceBtton = styled.button`
  display: flex;
  margin: 20px;
  padding: 5px 10px;
  background-color: #fff;
  border-radius: 7px;
  border: 1px solid #000;
  cursor: pointer;
  a {
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    svg{
      font-size: 20px;
      padding-right:5px;
    }
  }
  &:hover {
    transform: scale(0.98);
  }
`

export {
  ReverceBtton,
}