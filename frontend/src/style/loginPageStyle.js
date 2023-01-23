import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  align-items: center;
  margin-top: 20px;
`;

const Title = styled.h1`
  margin-top: 30px;
  svg {
    padding-top: 10px;
  }
`;
const SubTitle = styled.p`
  margin: 20px 0;
`;

const Form = styled.form`
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  max-width: 350px;
  margin-bottom: 10px;
`
const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  margin-bottom: 10px;
  font-family: inherit;
`;
const Button = styled.button`
  padding: 10px 20px;
  border: 1px solid #000;
  border-radius: 5px;
  background: #000;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  appearance: button;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  Container,
  Title,
  SubTitle,
  Form,
  InputWrapper,
  Input,
  Button,
}