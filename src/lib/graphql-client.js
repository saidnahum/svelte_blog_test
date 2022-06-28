import { GraphQLClient } from 'graphql-request';

const GRAPHQL_ENDPOINT = process.env['GRAPHQL_ENDPONT'];

export const client = new GraphQLClient('https://api-us-east-1.graphcms.com/v2/cl27r0vnv2ccs01xp4cjgazgt/master');