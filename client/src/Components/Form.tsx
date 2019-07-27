import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 40%;
  background-color: white;
  border-radius : 5px;
  margin : 5px;
`;
const Column = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
`;

const Input = styled.input`
  display: inline-block;
  width: 70%;
  height: 20px;
`;

const Title = styled.span`
  display: inline-block;
  width: 30%;
  text-align: right;
  padding-right: 10px;
  height: 20px;
  line-height: 20px;
`;

const Button = styled.button`
    all : unset;
    position : absolute;
    bottom : 0px;
    left : 0px;
    margin : 5px;
    width : 30px;
    height : 30px;
    display : flex;
    justify-content: center;
    align-items: center;
    font-weight : 600;
    font-size : 24px;
    cursor: pointer;
    border-radius : 50%;
    color : white;
    background-color : ${props => props.theme.colors.bookColor};
`;

const Form: React.FC = () => {
  return (
    <Container>
      <Column>
        <Title>Book name</Title>
        <Input type="text" />
      </Column>
      <Column>
        <Title>Genre</Title>
        <Input type="text" />
      </Column>
      <Column>
        <Title>Author</Title>
        <Input type="text" />
      </Column>
      <Button> + </Button>
    </Container>
  );
};

export default Form;
