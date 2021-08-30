// import { MutationResolvers } from "server/src/types";
import { User } from "../../../entity/User";
import * as bcrypt from "bcryptjs";

export const resolvers = {
  register: async (_: any, { input: { username, password } }: any) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      await User.create({
        username,
        password: hashedPassword,
      }).save();
    } catch (err) {
      const { detail } = err;

      if (detail.includes("already exists.")) {
        if (detail.includes("username")) {
          return {
            ok: false,
            errors: [
              {
                path: "username",
                message: "username  already taken",
              },
            ],
          };
        }
      }
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
