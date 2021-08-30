// import { MutationResolvers } from "server/src/types";
import { User } from "../../../entity/User";
import * as bcrypt from "bcryptjs";

export const resolvers = {
  register: async (_: any, { input: { username, password } }: any) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const user = await User.create({
        username,
        password: hashedPassword,
      });

      user.save();
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
