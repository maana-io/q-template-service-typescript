import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { GraphQLError, GraphQLFormattedError } from "graphql";

import { environment } from "./environment";
import { resolvers } from "./resolvers";
import infoSchema from "./schemas/info";
import personSchema from "./schemas/person";

type Maybe<T> = T | null;

export interface Context {}

function formatError(error: GraphQLError): GraphQLFormattedError {
  console.error(`[ERROR] ${JSON.stringify(error)}`);
  return {
    message: error.message,
    locations: error.locations,
    path: error.path,
  };
}

let plugins = [];

if (environment.apollo.playground) {
  plugins.push(ApolloServerPluginLandingPageGraphQLPlayground);
}

const server = new ApolloServer({
  resolvers: resolvers as any,
  typeDefs: [personSchema, infoSchema],
  introspection: environment.apollo.introspection,
  formatError,
  plugins,
});

server.listen(environment.port).then(({ url }) => console.log(`Server ready at ${url}. `));
