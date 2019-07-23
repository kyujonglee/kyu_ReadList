import React from 'react';
import { Data, Book } from '../interface';
import { HOME_PAGE } from '../Query/query';
import { Query } from 'react-apollo';
import styled from 'styled-components';

const Container = styled.section`
    width : 70%;
`;

const List: React.FC = () => {
  return (
    <div>
      <Query<Data> query={HOME_PAGE}>
        {({ loading, error, data }) => {
          if (loading) return <span>Loading</span>;
          if (error) return <span>Error</span>;
          if (data) {
            return data.books.map((book: Book) => (
              <span key={book.id}>{book.name}</span>
            ));
          }
        }}
      </Query>
    </div>
  );
};

export default List;
