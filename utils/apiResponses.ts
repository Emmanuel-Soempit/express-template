import { Response } from "express";

const sendResponse = (res: Response, 
                     statusCode: number, 
                     success: boolean, 
                     message: any, 
                     data: null | undefined | any = null) => {
    return res.status(statusCode).json({ statusCode, success, message, data });
};

export const successResponse = (res: Response, message: any, data: null | undefined | any) =>
    sendResponse(res, 200, true, message, data);

export const createdResponse = (res: Response, message: any, data: any) =>
    sendResponse(res, 201, true, message, data);

export const unauthorizedResponse = (res: Response, message: any) =>
    sendResponse(res, 401, false, message);

export const badRequestResponse = (res: Response, message: any) =>
    sendResponse(res, 400, false, message);

export const unprocessibleContentResponse = (res: Response, message: any) =>
    sendResponse(res, 422, false, message);

export const forbiddenResponse = (res: Response, message: any) =>
    sendResponse(res, 403, false, message);

export const notFoundResponse = (res: Response, message: any) =>
    sendResponse(res, 404, false, message);

export const serverErrorResponse = (res: Response, message: any) =>
    sendResponse(res, 500, false, message);
