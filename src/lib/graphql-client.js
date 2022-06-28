import { GraphQLClient } from 'graphql-request';

const GRAPHCMS_ENDPOINT = process.env['GRAPHCMS_ENDPOINT'];

export const client = new GraphQLClient(GRAPHCMS_ENDPOINT);