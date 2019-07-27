import React from 'react';
import styled from 'styled-components';
import { DETAIL_BOOK } from '../Query/query';
import { Query } from 'react-apollo';
import { IDetail_Book } from '../interface';

const Container = styled.div`
  background-color: #2bcbba;
  height: 100vh;
  padding: 40px;
`;

const Title = styled.span`
  font-size: 36px;
  color: white;
`;

export interface IPropsDetail {
  bookId: string | null;
}

const Detail: React.FC<IPropsDetail> = ({ bookId }) => {
  return (
    <Container>
      <Title>Detail</Title>
      {bookId && (
        <Query<IDetail_Book> query={DETAIL_BOOK} variables={{ id: bookId }}>
          {({ loading, error, data }) => {
            if (loading) return <span>Loading</span>;
            if (error) return <span>error...</span>;
            if (data) {
              const { book } = data;
              const { author } = book;
              const { books } = author;
              return (
                <>
                  <p>책 제목 : {book.name}</p>
                  <p>책 장르 : {book.genre}</p>
                  <p>작가 : {author.name}</p><br />
                  <p>작가의 다른 책들!</p>
                  <ul>
                    {books.map(book => (
                      <li key={book.id}>{book.name}</li>
                    ))}
                  </ul>
                </>
              );
            }
          }}
        </Query>
      )}
    </Container>
  );
};

export default Detail;
