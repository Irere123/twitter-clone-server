import { User } from "../../../entity/User";
import { QueryResolvers } from "server/src/types";
import { Comment } from "../../../entity/Comment";

export const resolvers: QueryResolvers.Resolvers = {
  allComments: async (_, { tweetId }) => {
    const comments = await Comment.find({ where: { tweetId } });
    return comments;
  },
};

export default {
  Query: {
    ...resolvers,
  },
  Comment: {
    user: async ({ userId }: { userId: any }) => {
      return await User.findOne({ where: { id: userId } });
    },
  },
};
