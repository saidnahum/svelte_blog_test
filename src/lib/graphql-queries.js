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
         tags
      }
   }
`;

export const getPostBySlugQuery = gql`
   query getPostBySlug($slug: String!) {
      post(where: {slug: $slug}) {
         id
         title
         slug
         excerpt
         createdAt
         date
         tags
         coverImage {
            url
            width
            height
         }
         author {
            name
            authorTitle: title
            picture {
               url(transformation: {image: {resize: {fit: clip, height: 50, width: 50}}})
               width
               height
            }
         }
         content {
            html
         }
      }
   }
`;

export const getPagesQuery = gql`
   query getPages {
      pages {
         title
         slug
         content {
            html
         }
      }
   }
`;

export const getPageByslugQuery = gql`
   query getPageBySlug ($slug: String) {
      page (where: {slug: $slug}) {
         title
         slug
         content {
            html
         }
      }
   }
`;