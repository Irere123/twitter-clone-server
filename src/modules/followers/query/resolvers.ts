import { Follow } from "../../../entity/Follow";

export default {
  Query: {
    isFollowedBy: async (_: any, __: any, { req }: any) => {
      const followers = Follow.find({ where: { followedId: req.userId } });

      return followers;
    },
  },
};
