import React from 'react';
import styled from 'styled-components';
import { IDetail_Book } from '../../interface';

const Container = styled.div`
  background-color: #2bcbba;
  height: 100vh;
  padding: 40px;
  box-sizing: border-box;
`;

const Title = styled.span`
  font-size: 40px;
  color: white;
  margin-bottom: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

const Book = styled.span`
  font-size: 20px;
  margin: 10px 0px;
`;

const WriterTitle = styled.span`
  font-size: 24px;
  margin-top: 10px;
`;

const BookItem = styled.li`
  margin: 10px 0px;
  margin-left: 15px;
`;

const DetailPresenter: React.FC<IDetail_Book> = data => {
  if (!data)
    return (
      <Container>
        <Title>Detail</Title>
      </Container>
    );
  const { book } = data;
  const { author } = book;
  const { books } = author;
  return (
    <Container>
      <Title>Detail</Title>
      <Content>
        <Book>책 제목 : {book.name}</Book>
        <Book>책 장르 : {book.genre}</Book>
        <Book>작가 : {author.name}</Book>
        <WriterTitle>작가의 다른 책들!</WriterTitle>
        <ul>
          {books.map((book, index) => (
            <BookItem key={`${book.id} ${index}`}>{book.name}</BookItem>
          ))}
        </ul>
      </Content>
    </Container>
  );
};

export default DetailPresenter;
