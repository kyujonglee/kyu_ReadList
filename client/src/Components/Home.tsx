import React, { useState } from 'react';
import List from './List';
import styled from 'styled-components';
import Detail from './Detail';
import Form from './Form';

const Container = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  height: 100vh;
  background-color: #d1d8e0;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Title = styled.span`
  font-size: 48px;
  font-weight: 600;
  padding: 20px;
  opacity: 0.8;
`;

const Home: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <>
      <Container>
        <Column>
          <Title>BookList</Title>
          <List setSelected={setSelected} />
          <Form />
        </Column>
        <Column>
          <Detail bookId={selected} />
        </Column>
      </Container>
    </>
  );
};

export default Home;
