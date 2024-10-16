"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const apiResponses_1 = require("./apiResponses");
const errors_1 = require("./errors");
const errorHandler = (res, err) => {
    if (err instanceof errors_1.NotFoundError) {
        return (0, apiResponses_1.notFoundResponse)(res, err.message);
    }
    else if (err instanceof errors_1.UnauthorizedError) {
        return (0, apiResponses_1.unauthorizedResponse)(res, err.message);
    }
    else if (err instanceof errors_1.BadRequestError) {
        return (0, apiResponses_1.badRequestResponse)(res, err.message);
    }
    else if (err instanceof errors_1.ForbiddenError) {
        return (0, apiResponses_1.forbiddenResponse)(res, err.message);
    }
    else if (err instanceof errors_1.UnprocessableEntityError) {
        return (0, apiResponses_1.unprocessibleContentResponse)(res, err.message);
    }
    else {
        return (0, apiResponses_1.serverErrorResponse)(res, err.message);
    }
};
exports.errorHandler = errorHandler;
