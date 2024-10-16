"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnprocessableEntityError = exports.ForbiddenError = exports.UnauthorizedError = exports.BadRequestError = exports.InternalServerError = exports.NotFoundError = exports.ValidationError = exports.DatabaseError = exports.MulterError = exports.AppError = void 0;
class AppError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.AppError = AppError;
class MulterError extends AppError {
    constructor(message) {
        super(message);
    }
}
exports.MulterError = MulterError;
class DatabaseError extends AppError {
    constructor(message) {
        super(message);
    }
}
exports.DatabaseError = DatabaseError;
class ValidationError extends AppError {
    constructor(message) {
        super(message);
    }
}
exports.ValidationError = ValidationError;
class NotFoundError extends AppError {
    constructor(message) {
        super(message);
    }
}
exports.NotFoundError = NotFoundError;
class InternalServerError extends AppError {
    constructor(message) {
        super(message);
    }
}
exports.InternalServerError = InternalServerError;
class BadRequestError extends AppError {
    constructor(message) {
        super(message);
    }
}
exports.BadRequestError = BadRequestError;
class UnauthorizedError extends AppError {
    constructor(message) {
        super(message);
    }
}
exports.UnauthorizedError = UnauthorizedError;
class ForbiddenError extends AppError {
    constructor(message) {
        super(message);
    }
}
exports.ForbiddenError = ForbiddenError;
class UnprocessableEntityError extends AppError {
    constructor(message) {
        super(message);
    }
}
exports.UnprocessableEntityError = UnprocessableEntityError;
