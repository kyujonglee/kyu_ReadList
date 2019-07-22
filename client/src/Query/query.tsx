import gql from 'graphql-tag';

export const HOME_PAGE = gql`
    query All_Books_Query {
        books {
            id
            name
            genre
        }
    }
`;
