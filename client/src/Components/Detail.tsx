import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #2bcbba;
  height: 100vh;
  padding: 40px;
`;

const Title = styled.span`
  font-size: 36px;
  color: white;
`;

const Detail: React.FC = () => {
  return (
    <Container>
      <Title>Detail</Title>
    </Container>
  );
};

export default Detail;
