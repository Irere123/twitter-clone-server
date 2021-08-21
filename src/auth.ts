import { User } from "./entity/User";
import { sign } from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from "./constants";

export const createTokens = (user: User) => {
  const accessToken = sign(
    { userId: user.id, count: user.count },
    ACCESS_TOKEN_SECRET,
    {
      expiresIn: "15min",
    }
  );

  const refreshToken = sign(
    { userId: user.id, count: user.count },
    REFRESH_TOKEN_SECRET,
    {
      expiresIn: "7d",
    }
  );

  return { refreshToken, accessToken };
};
