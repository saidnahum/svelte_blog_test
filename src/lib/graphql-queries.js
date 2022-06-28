import { gql } from 'graphql-request';

export const getPostsQuery = gql`
   query getPosts {
      posts {
         id
         title
         slug
         excerpt
         coverImage {
            url
            width
            height
         }
         content {
            markdown
         }
         author {
            name
            picture {
               url
               width
               height
            }
         }
      }
   }
`;