import { MutationResolvers } from "server/src/types";
import { Tweet } from "../../../entity/Tweet";

export const resolvers: MutationResolvers.Resolvers = {
  createTweet: async (_, { input: { body, userId } }) => {
    try {
      await Tweet.create({
        body,
        userId,
      }).save();
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
