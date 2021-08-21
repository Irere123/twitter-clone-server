import { MutationResolvers } from "server/src/types";
import { Comment } from "../../../entity/Comment";

export const resolvers: MutationResolvers.Resolvers = {
  createComment: async (_, { input: { body, userId, tweetId } }) => {
    try {
      const comment = await Comment.create({ body, userId, tweetId });

      comment.save();
    } catch (err) {
      console.log(err);
    }

    return {
      ok: true,
      errors: [],
    };
  },
};

export default {
  Mutation: {
    ...resolvers,
  },
};
