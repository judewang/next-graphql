import { GraphQLClient } from 'graphql-request';
import { getSdk } from '../graphql-fetcher';

const client = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL ?? '');

export const fetcher = getSdk(client);
