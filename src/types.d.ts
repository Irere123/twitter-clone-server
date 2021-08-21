export interface CreateCommentInput {
  body: string;

  tweetId: string;

  userId: string;
}

export interface FollowInput {
  followingId: string;

  followerId: string;
}

export interface CreateTweetInput {
  body: string;

  userId: string;
}

export interface LoginInput {
  firstNameOrLast: string;

  password: string;
}

export interface RegisterInput {
  firstName: string;

  lastName: string;

  password: string;
}

// ====================================================
// Types
// ====================================================

export interface Query {
  allComments: Comment[];

  allTweets: Tweet[];

  getTweet: Tweet;

  allUsers: User[];

  getUser: User;
}

export interface Comment {
  id: string;

  body: string;

  user: User;

  userId: string;

  createdAt: string;
}

export interface User {
  id: string;

  firstName: string;

  lastName: string;

  password: string;

  displayName: string;

  createdAt: string;
}

export interface Tweet {
  id: string;

  body: string;

  user: User;

  userId: string;

  createdAt: string;
}

export interface Mutation {
  createComment: CreateCommentResponse;

  Follow: FollowResponse;

  createTweet: CreateTweetResponse;

  login: LoginResponse;

  register: RegisterResponse;
}

export interface CreateCommentResponse {
  ok: boolean;

  errors: Error[];
}

export interface Error {
  path: string;

  message: string;
}

export interface FollowResponse {
  ok: boolean;

  errors: Error[];
}

export interface CreateTweetResponse {
  ok: boolean;

  errors: Error[];
}

export interface LoginResponse {
  errors: Error[];

  user?: User | null;
}

export interface RegisterResponse {
  ok: boolean;

  errors: Error[];
}

// ====================================================
// Arguments
// ====================================================

export interface AllCommentsQueryArgs {
  tweetId: string;
}
export interface GetTweetQueryArgs {
  tweetId: string;
}
export interface GetUserQueryArgs {
  userId: string;
}
export interface CreateCommentMutationArgs {
  input: CreateCommentInput;
}
export interface FollowMutationArgs {
  input: FollowInput;
}
export interface CreateTweetMutationArgs {
  input: CreateTweetInput;
}
export interface LoginMutationArgs {
  input: LoginInput;
}
export interface RegisterMutationArgs {
  input: RegisterInput;
}

import { GraphQLResolveInfo } from "graphql";

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  Context = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

export namespace QueryResolvers {
  export interface Resolvers<Context = {}, TypeParent = {}> {
    allComments?: AllCommentsResolver<Comment[], TypeParent, Context>;

    allTweets?: AllTweetsResolver<Tweet[], TypeParent, Context>;

    getTweet?: GetTweetResolver<Tweet, TypeParent, Context>;

    allUsers?: AllUsersResolver<User[], TypeParent, Context>;

    getUser?: GetUserResolver<User, TypeParent, Context>;
  }

  export type AllCommentsResolver<
    R = Comment[],
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, AllCommentsArgs>;
  export interface AllCommentsArgs {
    tweetId: string;
  }

  export type AllTweetsResolver<
    R = Tweet[],
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type GetTweetResolver<R = Tweet, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    GetTweetArgs
  >;
  export interface GetTweetArgs {
    tweetId: string;
  }

  export type AllUsersResolver<
    R = User[],
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type GetUserResolver<R = User, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    GetUserArgs
  >;
  export interface GetUserArgs {
    userId: string;
  }
}

export namespace CommentResolvers {
  export interface Resolvers<Context = {}, TypeParent = Comment> {
    id?: IdResolver<string, TypeParent, Context>;

    body?: BodyResolver<string, TypeParent, Context>;

    user?: UserResolver<User, TypeParent, Context>;

    userId?: UserIdResolver<string, TypeParent, Context>;

    createdAt?: CreatedAtResolver<string, TypeParent, Context>;
  }

  export type IdResolver<R = string, Parent = Comment, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
  export type BodyResolver<
    R = string,
    Parent = Comment,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type UserResolver<R = User, Parent = Comment, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UserIdResolver<
    R = string,
    Parent = Comment,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = string,
    Parent = Comment,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace UserResolvers {
  export interface Resolvers<Context = {}, TypeParent = User> {
    id?: IdResolver<string, TypeParent, Context>;

    firstName?: FirstNameResolver<string, TypeParent, Context>;

    lastName?: LastNameResolver<string, TypeParent, Context>;

    password?: PasswordResolver<string, TypeParent, Context>;

    displayName?: DisplayNameResolver<string, TypeParent, Context>;

    createdAt?: CreatedAtResolver<string, TypeParent, Context>;
  }

  export type IdResolver<R = string, Parent = User, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
  export type FirstNameResolver<
    R = string,
    Parent = User,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type LastNameResolver<
    R = string,
    Parent = User,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type PasswordResolver<
    R = string,
    Parent = User,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type DisplayNameResolver<
    R = string,
    Parent = User,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = string,
    Parent = User,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace TweetResolvers {
  export interface Resolvers<Context = {}, TypeParent = Tweet> {
    id?: IdResolver<string, TypeParent, Context>;

    body?: BodyResolver<string, TypeParent, Context>;

    user?: UserResolver<User, TypeParent, Context>;

    userId?: UserIdResolver<string, TypeParent, Context>;

    createdAt?: CreatedAtResolver<string, TypeParent, Context>;
  }

  export type IdResolver<R = string, Parent = Tweet, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
  export type BodyResolver<R = string, Parent = Tweet, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UserResolver<R = User, Parent = Tweet, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UserIdResolver<
    R = string,
    Parent = Tweet,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = string,
    Parent = Tweet,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = {}, TypeParent = {}> {
    createComment?: CreateCommentResolver<
      CreateCommentResponse,
      TypeParent,
      Context
    >;

    Follow?: FollowResolver<FollowResponse, TypeParent, Context>;

    createTweet?: CreateTweetResolver<CreateTweetResponse, TypeParent, Context>;

    login?: LoginResolver<LoginResponse, TypeParent, Context>;

    register?: RegisterResolver<RegisterResponse, TypeParent, Context>;
  }

  export type CreateCommentResolver<
    R = CreateCommentResponse,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, CreateCommentArgs>;
  export interface CreateCommentArgs {
    input: CreateCommentInput;
  }

  export type FollowResolver<
    R = FollowResponse,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, FollowArgs>;
  export interface FollowArgs {
    input: FollowInput;
  }

  export type CreateTweetResolver<
    R = CreateTweetResponse,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, CreateTweetArgs>;
  export interface CreateTweetArgs {
    input: CreateTweetInput;
  }

  export type LoginResolver<
    R = LoginResponse,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, LoginArgs>;
  export interface LoginArgs {
    input: LoginInput;
  }

  export type RegisterResolver<
    R = RegisterResponse,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, RegisterArgs>;
  export interface RegisterArgs {
    input: RegisterInput;
  }
}

export namespace CreateCommentResponseResolvers {
  export interface Resolvers<Context = {}, TypeParent = CreateCommentResponse> {
    ok?: OkResolver<boolean, TypeParent, Context>;

    errors?: ErrorsResolver<Error[], TypeParent, Context>;
  }

  export type OkResolver<
    R = boolean,
    Parent = CreateCommentResponse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ErrorsResolver<
    R = Error[],
    Parent = CreateCommentResponse,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace ErrorResolvers {
  export interface Resolvers<Context = {}, TypeParent = Error> {
    path?: PathResolver<string, TypeParent, Context>;

    message?: MessageResolver<string, TypeParent, Context>;
  }

  export type PathResolver<R = string, Parent = Error, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
  export type MessageResolver<
    R = string,
    Parent = Error,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace FollowResponseResolvers {
  export interface Resolvers<Context = {}, TypeParent = FollowResponse> {
    ok?: OkResolver<boolean, TypeParent, Context>;

    errors?: ErrorsResolver<Error[], TypeParent, Context>;
  }

  export type OkResolver<
    R = boolean,
    Parent = FollowResponse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ErrorsResolver<
    R = Error[],
    Parent = FollowResponse,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace CreateTweetResponseResolvers {
  export interface Resolvers<Context = {}, TypeParent = CreateTweetResponse> {
    ok?: OkResolver<boolean, TypeParent, Context>;

    errors?: ErrorsResolver<Error[], TypeParent, Context>;
  }

  export type OkResolver<
    R = boolean,
    Parent = CreateTweetResponse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ErrorsResolver<
    R = Error[],
    Parent = CreateTweetResponse,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace LoginResponseResolvers {
  export interface Resolvers<Context = {}, TypeParent = LoginResponse> {
    errors?: ErrorsResolver<Error[], TypeParent, Context>;

    user?: UserResolver<User | null, TypeParent, Context>;
  }

  export type ErrorsResolver<
    R = Error[],
    Parent = LoginResponse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type UserResolver<
    R = User | null,
    Parent = LoginResponse,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace RegisterResponseResolvers {
  export interface Resolvers<Context = {}, TypeParent = RegisterResponse> {
    ok?: OkResolver<boolean, TypeParent, Context>;

    errors?: ErrorsResolver<Error[], TypeParent, Context>;
  }

  export type OkResolver<
    R = boolean,
    Parent = RegisterResponse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ErrorsResolver<
    R = Error[],
    Parent = RegisterResponse,
    Context = {}
  > = Resolver<R, Parent, Context>;
}
