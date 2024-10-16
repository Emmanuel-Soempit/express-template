class AppError extends Error {
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

class MulterError extends AppError {
    constructor(message: string) {
        super(message);
    }
}

class DatabaseError extends AppError {
    constructor(message: string) {
        super(message);
    }
}

class ValidationError extends AppError {
    constructor(message: string) {
        super(message);
    }
}

class NotFoundError extends AppError {
    constructor(message: string) {
        super(message);
    }
}
class InternalServerError extends AppError {
    constructor(message: string) {
        super(message);
    }
}
class BadRequestError extends AppError {
    constructor(message: string) {
        super(message);
    }
}
class UnauthorizedError extends AppError {
    constructor(message: string) {
        super(message);
    }
}
class ForbiddenError extends AppError {
    constructor(message: string) {
        super(message);
    }
}
class UnprocessableEntityError extends AppError {
    constructor(message: string) {
        super(message);
    }
}




export {
     AppError, 
     MulterError, 
     DatabaseError, 
     ValidationError, 
     NotFoundError,
     InternalServerError,
     BadRequestError,
     UnauthorizedError,
     ForbiddenError,
     UnprocessableEntityError
     };
