import { client } from '$lib/graphql-client';
import { getPostBySlugQuery } from '$lib/graphql-queries';

export const get = async (req) => {

   const slug = req.params.slug;

   try {

      const variables = {slug};

      const { post } = await client.request(getPostBySlugQuery, variables);
      
      return {
         status: 200,
         body: {post}
      }
   } catch (error) {
      return {
         status: 500,
         body: { error: error.message }
      }
   }
};