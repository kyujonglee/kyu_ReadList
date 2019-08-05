import React from 'react';
import { DETAIL_BOOK } from '../../Query/query';
import { Query } from 'react-apollo';
import { IDetail_Book } from '../../interface';
import DetailPresenter from './DetailPresenter';

export interface IPropsDetail {
  bookId: string | null;
}

const DetailContainer: React.FC<IPropsDetail> = ({ bookId }) => {
  if (bookId) {
    return (
      <Query<IDetail_Book> query={DETAIL_BOOK} variables={{ id: bookId }}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading</div>;
          if (error) return <div>error</div>;
          if (data) return <DetailPresenter {...data} />;
        }}
      </Query>
    );
  } else {
    return null;
  }
};

export default DetailContainer;
