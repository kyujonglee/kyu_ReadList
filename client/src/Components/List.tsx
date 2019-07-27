import React from 'react';
import { Data, Book } from '../interface';
import { HOME_PAGE } from '../Query/query';
import { Query } from 'react-apollo';
import styled from 'styled-components';

const Container = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns : repeat(4,1fr);
`;

const SBook = styled.li`
  all: unset;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  margin: 10px;
  border: 2px solid ${props => props.theme.colors.bookColor};
  background-color: white;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 20px;
  color: ${props => props.theme.colors.bookColor};
  &:hover {
    color: ${props => props.theme.colors.bookHoverColor};
    cursor: pointer;
    border-color: ${props => props.theme.colors.bookHoverColor};
  }
`;

const List: React.FC = () => {
  return (
    <Container>
      <Query<Data> query={HOME_PAGE}>
        {({ loading, error, data }) => {
          if (loading) return <span>Loading</span>;
          if (error) return <span>Error</span>;
          if (data) {
            return data.books.map((book: Book) => (
              <SBook key={book.id}>{book.name}</SBook>
            ));
          }
        }}
      </Query>
    </Container>
  );
};

export default List;
