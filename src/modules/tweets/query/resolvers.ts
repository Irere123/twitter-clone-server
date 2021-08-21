import { User } from "../../../entity/User";
import { Tweet } from "../../../entity/Tweet";
import { QueryResolvers } from "server/src/types";

export const resolvers: QueryResolvers.Resolvers = {
  allTweets: async () => await Tweet.find({ order: { createdAt: "DESC" } }),
};

export default {
  Query: {
    ...resolvers,
    getTweet: async (_: any, { tweetId }: { tweetId: any }) => {
      const tweet = await Tweet.findOne({ where: { id: tweetId } });

      return tweet;
    },
  },
  Tweet: {
    user: async ({ userId }: { userId: string }) => {
      const user = await User.findOne({ where: { id: userId } });

      return user;
    },
  },
};
