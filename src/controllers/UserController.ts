import { Request, RequestHandler, Response } from "express";
import { createdResponse, successResponse } from "../utils/apiResponses";

export default class UserController {
  /**
   * Login User in
   * @param req
   * @param res
   * @returns
   */
  public Login = async (req: Request, res: Response): Promise<any> => {
    return successResponse(res, "Succesfully Logged in", null);
  };

  /**
   * User Registration
   * @param req
   * @param res
   * @returns
   */
  public Register = async (req: Request, res: Response): Promise<any> => {
    return successResponse(res, "Succesfully Registered", null);
  };
}
