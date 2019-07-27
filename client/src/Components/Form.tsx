import React, { useState } from 'react';
import styled from 'styled-components';
import { Query, Mutation } from 'react-apollo';
import { Authors, Book, BookVariables } from '../interface';
import { ALL_AUTHOR, ADD_BOOK, ALL_BOOKS } from '../Query/query';

const SForm = styled.form`
  position: absolute;
  bottom : 100px;
  left : 10px;
  display: flex;
  flex-direction: column;
  width: 40%;
  background-color: white;
  border-radius: 5px;
  margin: 5px;
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
  all: unset;
  position: absolute;
  bottom: 0px;
  left: 0px;
  margin: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 24px;
  cursor: pointer;
  border-radius: 50%;
  color: white;
  background-color: ${props => props.theme.colors.bookColor};
`;

const Form: React.FC = () => {
  const [book, setBook] = useState({
    name: '',
    genre: '',
    authorId: ''
  });
  const onChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    const key = String(e.currentTarget.getAttribute('name'));
    const value = e.currentTarget.value;
    setBook({ ...book, [key]: value });
  };

  return (
    <Mutation<Book, BookVariables> mutation={ADD_BOOK}>
      {addBook => (
        <SForm
          id="author-form"
          onSubmit={e => {
            e.preventDefault();
            addBook({
              variables: book,
              refetchQueries: [{ query: ALL_BOOKS }]
            });
            setBook({ name: '', genre: '', authorId: '' });
          }}
        >
          <Column>
            <Title>Book name</Title>
            <Input
              type="text"
              name="name"
              value={book.name}
              onChange={onChange}
            />
          </Column>
          <Column>
            <Title>Genre</Title>
            <Input
              type="text"
              name="genre"
              value={book.genre}
              onChange={onChange}
            />
          </Column>
          <Column>
            <Title>Author</Title>
            <Query<Authors> query={ALL_AUTHOR}>
              {({ loading, error, data }) => {
                if (error) return <span>error...</span>;
                if (loading) return <span>Loading</span>;
                if (data) {
                  const { authors } = data;
                  return (
                    <select
                      name="authorId"
                      onChange={e =>
                        setBook({ ...book, authorId: e.currentTarget.value })
                      }
                      value={book.authorId}
                    >
                      <option key={0} />
                      {authors.map(author => (
                        <option key={author.id} value={author.id}>
                          {author.name}
                        </option>
                      ))}
                    </select>
                  );
                }
              }}
            </Query>
          </Column>
          <Button> + </Button>
        </SForm>
      )}
    </Mutation>
  );
};

export default Form;
