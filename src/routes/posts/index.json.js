import { client } from '$lib/graphql-client';
import { getPostsQuery } from '$lib/graphql-queries';

export const get = async () => {
   try {
      const { posts } = await client.request(getPostsQuery);
      
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