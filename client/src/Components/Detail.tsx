import React from 'react';
import styled from 'styled-components';
import { DETAIL_BOOK } from '../Query/query';
import { Query } from 'react-apollo';
import { IDetail_Book } from '../interface';

const Container = styled.div`
  background-color: #2bcbba;
  height: 100vh;
  padding: 40px;
  box-sizing : border-box;
`;

const Title = styled.span`
  font-size: 40px;
  color: white;
  margin-bottom : 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  color : white;
`;

const Book = styled.span`
  font-size : 20px;
  margin : 10px 0px;
`;

const WriterTitle = styled.span`
  font-size : 24px;
  margin-top : 10px;
`;

const BookItem = styled.li`
  margin: 10px 0px;
  margin-left : 15px;
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
            if (loading) return <div>Loading</div>;
            if (error) return <div>error...</div>;
            if (data) {
              const { book } = data;
              const { author } = book;
              const { books } = author;
              return (
                <Content>
                  <Book>책 제목 : {book.name}</Book>
                  <Book>책 장르 : {book.genre}</Book>
                  <Book>작가 : {author.name}</Book>
                  <WriterTitle>작가의 다른 책들!</WriterTitle>
                  <ul>
                    {books.map((book,index) => (
                      <BookItem key={`${book.id} ${index}`}>{book.name}</BookItem>
                    ))}
                  </ul>
                </Content>
              );
            }
          }}
        </Query>
      )}
    </Container>
  );
};

export default Detail;
