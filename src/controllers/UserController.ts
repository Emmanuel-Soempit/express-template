import { Request, Response } from "express";
import { createdResponse, successResponse } from "../utils/apiResponses";
import { errorHandler } from "../utils/errorHandlers";
import UserService from "./UserServices";
import argon from "argon2";
import {
  NotFoundError,
  UnauthorizedError,
} from "../utils/errors";
import JwtService from "../services/JwtService";

export default class UserController {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  /**
   * Login User in
   * @param req
   * @param res
   * @returns
   */
  public Login = async (req: Request, res: Response): Promise<any> => {
    const data = req.body;
    const jwt = new JwtService()

    try {
      const user = await this.userService.getUserByEmail(data.email);
      if (!user) throw new NotFoundError("User not found");

      const verificationStatus = await argon.verify(user.password, data.password);

      if (!verificationStatus)
        throw new UnauthorizedError("Incorrect password");

      const { password, ...userWithoutPassword } = user;

      const token = jwt.generateToken({email: user.email, id: user.id, duration: '2'})

      return successResponse(res, "Login successful", {user:userWithoutPassword, token});
    } catch (error: any ) {
        errorHandler(res, error)
    }
  };

  /**
   * User Registration
   * @param req
   * @param res
   * @returns
   */
  public Register = async (req: Request, res: Response): Promise<any> => {
    const { first_name, last_name, email, password } = req.body;

    try {
      //Save user details
      const user = await this.userService.createUser({
        firstName: first_name,
        lastName: last_name,
        email: email,
        password: (await argon.hash(password)) as string,
      });

      return createdResponse(res, "User created succesfully", user);
    } catch (error: any) {
      return errorHandler(res, error);
    }
  };
}
