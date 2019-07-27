import React from 'react';
import { Data, Book } from '../interface';
import { ALL_BOOKS } from '../Query/query';
import { Query } from 'react-apollo';
import styled from 'styled-components';

const Container = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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

interface IPropsList {
  setSelected: (bookId: string | null) => void;
}

const List: React.FC<IPropsList> = ({ setSelected }) => {
  const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const bookId = e.currentTarget.getAttribute('value');
    setSelected(bookId);
  };
  return (
    <Container>
      <Query<Data> query={ALL_BOOKS}>
        {({ loading, error, data }) => {
          if (loading) return <span>Loading</span>;
          if (error) return <span>Error</span>;
          if (data) {
            return data.books.map((book: Book) => (
              <SBook key={book.id} value={book.id} onClick={onClick}>
                {book.name}
              </SBook>
            ));
          }
        }}
      </Query>
    </Container>
  );
};

export default List;
