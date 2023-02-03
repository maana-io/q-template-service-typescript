import { InfoResolver } from './resolvers/info';
import { PersonResolver } from './resolvers/person';
import {
  MutationResolvers,
  PersonEventResolvers,
  PersonResolvers,
  QueryResolvers,
} from './schemas/gen-types';

/**
 * Aggregates the resolvers defined by graphql-code-gen from our GraphQL schema.
 *
 * Add interfaces here when they have been implemented in one of the
 * type-specific resolver files.
 */
interface Resolvers {
  Person: PersonResolvers;
  PersonEvent: PersonEventResolvers;
  Query: QueryResolvers;
  Mutation: MutationResolvers;
}

/**
 * Unpack the implementation of the interfaces into the top-level resolver object.
 */
export const resolvers: Resolvers = {
  Person: { ...PersonResolver.Person },
  PersonEvent: { ...PersonResolver.PersonEvent },
  Query: {
    ...InfoResolver.Query,
    ...PersonResolver.Query,
  },
  Mutation: {
    ...PersonResolver.Mutation,
  },
};
