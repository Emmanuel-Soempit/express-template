import { Prisma, User } from "@prisma/client";
import prisma from "../config/database";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { UserType } from "../types";
import { BadRequestError, InternalServerError } from "../utils/errors";
("../config/database");

export default class UserService {
  private readonly userModel: Prisma.UserDelegate<DefaultArgs>;

  constructor() {
    this.userModel = prisma.user;
  }

  public createUser = async (data: UserType) => {
    //Throw error if user aleready exist
    if (await this.getUserByEmail(data.email))
      throw new BadRequestError("Email already exist");
    const user = await this.userModel.create({
      data,
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
      },
    });

    if (!user) throw new InternalServerError("Error creating user");

    return user;
  };

  public getUserByEmail = async (email: string) => {
    const user: User | null = await this.userModel.findFirst({
      where: { email },
    });

    return user;
  };
}
