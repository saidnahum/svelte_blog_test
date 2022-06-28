import { client } from '$lib/graphql-client';
import { getPageByslugQuery } from '$lib/graphql-queries';

export const get = async (req) => {

   const slug = req.params.slug;

   try {

      const variables = {slug};

      const { page } = await client.request(getPageByslugQuery, variables);
      
      return {
         status: 200,
         body: {page}
      }
   } catch (error) {
      return {
         status: 500,
         body: { error: error.message }
      }
   }
};