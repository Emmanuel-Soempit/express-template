import { NextFunction, Response, Request, RequestHandler } from "express";
import Joi, { Schema, ValidationResult } from "joi";
import { unprocessibleContentResponse } from "../utils/apiResponses";

const validateBody = async (
  schema: Schema,
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const { error }: ValidationResult = schema.validate(req.body);
  if (!error) {
    next();
    return;
  } else {
    const extractedErrors: string[] = error.details.map((err) => err.message);
    return unprocessibleContentResponse(res, extractedErrors[0]);
  }
};

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const registrationSchema = Joi.object({
  first_name: Joi.string().required().max(30),
  last_name: Joi.string().required().max(30),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});


export const loginValidation = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    return validateBody(loginSchema, req, res, next);
  };
};

export const registrationValidation = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    return validateBody(registrationSchema, req, res, next);
  };
};
