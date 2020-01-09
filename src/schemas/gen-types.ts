import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from "graphql";
import { Person } from "../model/person";
import { Context } from "../main";
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Info = {
  __typename?: "Info";
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  addPerson?: Maybe<Scalars["ID"]>;
  updatePerson?: Maybe<Scalars["ID"]>;
  deletePerson?: Maybe<Person>;
};

export type MutationaddPersonArgs = {
  input?: Maybe<PersonInput>;
};

export type MutationupdatePersonArgs = {
  input?: Maybe<PersonInput>;
};

export type MutationdeletePersonArgs = {
  id: Scalars["ID"];
};

export type Person = {
  __typename?: "Person";
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  givenName?: Maybe<Scalars["String"]>;
  familyName?: Maybe<Scalars["String"]>;
  dateOfBirth?: Maybe<Scalars["Date"]>;
  age?: Maybe<Scalars["Int"]>;
};

export type PersonEvent = {
  __typename?: "PersonEvent";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  givenName?: Maybe<Scalars["String"]>;
  familyName?: Maybe<Scalars["String"]>;
  dateOfBirth?: Maybe<Scalars["Date"]>;
};

export type PersonInput = {
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  givenName?: Maybe<Scalars["String"]>;
  familyName?: Maybe<Scalars["String"]>;
  dateOfBirth?: Maybe<Scalars["Date"]>;
};

export type Query = {
  __typename?: "Query";
  info?: Maybe<Info>;
  allPeople: Array<Person>;
  person?: Maybe<Person>;
};

export type QuerypersonArgs = {
  id: Scalars["ID"];
};

export type Subscription = {
  __typename?: "Subscription";
  personAdded: PersonEvent;
  personUpdated: PersonEvent;
  personDeleted: PersonEvent;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Info: ResolverTypeWrapper<Info>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Person: ResolverTypeWrapper<Person>;
  Date: ResolverTypeWrapper<Scalars["Date"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Mutation: ResolverTypeWrapper<{}>;
  PersonInput: PersonInput;
  Subscription: ResolverTypeWrapper<{}>;
  PersonEvent: ResolverTypeWrapper<PersonEvent>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Info: Info;
  ID: Scalars["ID"];
  String: Scalars["String"];
  Person: Person;
  Date: Scalars["Date"];
  Int: Scalars["Int"];
  Mutation: {};
  PersonInput: PersonInput;
  Subscription: {};
  PersonEvent: PersonEvent;
  Boolean: Scalars["Boolean"];
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["Date"], any> {
  name: "Date";
}

export type InfoResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Info"] = ResolversParentTypes["Info"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  addPerson?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType, MutationaddPersonArgs>;
  updatePerson?: Resolver<
    Maybe<ResolversTypes["ID"]>,
    ParentType,
    ContextType,
    MutationupdatePersonArgs
  >;
  deletePerson?: Resolver<
    Maybe<ResolversTypes["Person"]>,
    ParentType,
    ContextType,
    RequireFields<MutationdeletePersonArgs, "id">
  >;
};

export type PersonResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Person"] = ResolversParentTypes["Person"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  givenName?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  familyName?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  dateOfBirth?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  age?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
};

export type PersonEventResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["PersonEvent"] = ResolversParentTypes["PersonEvent"]
> = {
  id?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  givenName?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  familyName?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  dateOfBirth?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  info?: Resolver<Maybe<ResolversTypes["Info"]>, ParentType, ContextType>;
  allPeople?: Resolver<Array<ResolversTypes["Person"]>, ParentType, ContextType>;
  person?: Resolver<
    Maybe<ResolversTypes["Person"]>,
    ParentType,
    ContextType,
    RequireFields<QuerypersonArgs, "id">
  >;
};

export type SubscriptionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Subscription"] = ResolversParentTypes["Subscription"]
> = {
  personAdded?: SubscriptionResolver<
    ResolversTypes["PersonEvent"],
    "personAdded",
    ParentType,
    ContextType
  >;
  personUpdated?: SubscriptionResolver<
    ResolversTypes["PersonEvent"],
    "personUpdated",
    ParentType,
    ContextType
  >;
  personDeleted?: SubscriptionResolver<
    ResolversTypes["PersonEvent"],
    "personDeleted",
    ParentType,
    ContextType
  >;
};

export type Resolvers<ContextType = Context> = {
  Date?: GraphQLScalarType;
  Info?: InfoResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Person?: PersonResolvers<ContextType>;
  PersonEvent?: PersonEventResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
