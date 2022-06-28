import { client } from '$lib/graphql-client';
import { getPagesQuery } from '$lib/graphql-queries';

export const get = async () => {
   try {
      const { pages } = await client.request(getPagesQuery);
      
      return {
         status: 200,
         body: {pages}
      }
   } catch (error) {
      return {
         status: 500,
         body: { error: error.message }
      }
   }
};