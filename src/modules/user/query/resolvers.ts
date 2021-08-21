import { QueryResolvers } from "server/src/types";
import { User } from "../../../entity/User";

export const resolvers: QueryResolvers.Resolvers = {
  allUsers: async () => {
    const users = await User.find();

    return users;
  },
};

export default {
  Query: {
    ...resolvers,
  },
};
