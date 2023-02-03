import { ApolloServer, ApolloServerPlugin, BaseContext } from '@apollo/server';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { startStandaloneServer } from '@apollo/server/standalone';

import { environment } from './environment';
import { resolvers } from './resolvers';
import infoSchema from './schemas/info';
import personSchema from './schemas/person';

type Maybe<T> = T | null;

export interface Context {}

function formatError(formattedError: GraphQLFormattedError): GraphQLFormattedError {
  console.error(`[ERROR] ${JSON.stringify(formattedError)}`);
  return {
    message: formattedError.message,
    locations: formattedError.locations,
    path: formattedError.path,
  };
}

const server = new ApolloServer({
  resolvers: resolvers as any,
  typeDefs: [personSchema, infoSchema],
  introspection: environment.apollo.introspection,
  formatError,
});

startStandaloneServer(server, {
  listen: {
    port: Number(environment.port) || 8050,
  },
}).then(({ url }) => console.log(`Server ready at ${url}. `));
