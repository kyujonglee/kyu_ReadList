import React from 'react';
import { Data, Book } from '../interface';
import { ALL_BOOKS, DELETE_BOOK } from '../Query/query';
import { Query, Mutation } from 'react-apollo';
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
  position: relative;
`;

const DeleteButton = styled.span`
  position: absolute;
  right: 5px;
  font-size: 12px;
  z-index: 10;
`;

const BookName = styled.span`
  display: inline-block;
  width: 80%;
  text-align: center;
`;

interface IPropsList {
  setSelected: (bookId: string | null) => void;
}

interface IPropsMutation {
  id: string;
}

const List: React.FC<IPropsList> = ({ setSelected }) => {
  const onClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    const bookId = e.currentTarget.dataset['id'] || null;
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
              <Mutation<IPropsMutation> mutation={DELETE_BOOK} key={book.id}>
                {deleteTodo => {
                  return (
                    <SBook value={book.id}>
                      <BookName onClick={onClick} data-id={book.id}>
                        {book.name}
                      </BookName>
                      <DeleteButton
                        onClick={ async e => {
                          await deleteTodo({
                            variables: { id: book.id },
                            refetchQueries: [{ query: ALL_BOOKS }]
                          });
                          setSelected('');
                        }}
                        data-id={book.id}
                      >
                        <span role="img" aria-labelledby="delete">
                          ❌
                        </span>
                      </DeleteButton>
                    </SBook>
                  );
                }}
              </Mutation>
            ));
          }
        }}
      </Query>
    </Container>
  );
};
export default List;
