import { User } from "../../../entity/User";

export default {
  Query: {
    me: async (_: any, __: any, { req }: any) => {
      if (!req.userId) {
        return null;
      }

      return await User.findOne(req.userId);
    },
  },
};
