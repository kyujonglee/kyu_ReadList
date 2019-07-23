import React from 'react';
import List from './List';
import styled from 'styled-components';
import Detail from './Detail';
import Form from './Form';

const Container = styled.div`
  display: flex;
  height : 100vh;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Column>
          <List />
          <Form />
        </Column>
        <Column>
          <Detail />
        </Column>
      </Container>
    </>
  );
};

export default Home;
