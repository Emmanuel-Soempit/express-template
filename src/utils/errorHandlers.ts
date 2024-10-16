import { Response } from "express";
import {
  badRequestResponse,
  forbiddenResponse,
  notFoundResponse,
  serverErrorResponse,
  unauthorizedResponse,
  unprocessibleContentResponse,
} from "./apiResponses";
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
  ForbiddenError,
  UnprocessableEntityError,
} from "./errors";

export const errorHandler = (res: Response, err: Error) => {
  if (err instanceof NotFoundError) {
    return notFoundResponse(res, err.message);
  } else if (err instanceof UnauthorizedError) {
    return unauthorizedResponse(res, err.message);
  } else if (err instanceof BadRequestError) {
    return badRequestResponse(res, err.message);
  } else if (err instanceof ForbiddenError) {
    return forbiddenResponse(res, err.message);
  } else if (err instanceof UnprocessableEntityError) {
    return unprocessibleContentResponse(res, err.message);
  } else {
    return serverErrorResponse(res, err.message);
  }
};
