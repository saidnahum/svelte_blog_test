import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';
import { getPostsQuery } from '$lib/graphql-queries';

export const get = async () => {
   try {
      const query = gql`
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

      const { posts } = await client.reques(query);

      return {
         status: 200,
         body: {posts}
      }
   } catch (error) {
      return {
         status: 500,
         body: { error: error.message }
      }
   }
};