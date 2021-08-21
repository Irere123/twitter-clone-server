import { Follow } from "../../../entity/Follow";

export default {
  Mutation: {
    follow: async (
      _: any,
      { input: { followingId } }: { input: any },
      { req }: any
    ) => {
      const follow = await Follow.create({
        followedId: followingId,
        followerId: req.userId,
      });

      follow.save();
      return {
        ok: true,
        errors: [],
      };
    },
  },
};
