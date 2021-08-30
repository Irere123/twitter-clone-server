import { QueryResolvers } from "server/src/types";
import { User } from "../../../entity/User";
import { Tweet } from "../../../entity/Tweet";

export const resolvers: QueryResolvers.Resolvers = {
  // @ts-ignore
  allUsers: async () => {
    const users = await User.find({ order: { createdAt: "DESC"}});

    return users;
  },
  // @ts-ignore
  getUser: async (_, { userId }) => {
    const user = await User.findOne(userId);

    return user;
  },
  // @ts-ignore
  lastestTweets: async (_, { userId }) => {
    const tweets = Tweet.find({
      where: { userId },
      take: 4,
      order: { createdAt: "DESC" },
    });

    return tweets;
  },
};

export default {
  Query: {
    ...resolvers,
  },
};
