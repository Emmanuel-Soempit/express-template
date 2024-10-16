"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrationValidation = exports.loginValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const apiResponses_1 = require("../utils/apiResponses");
const validateBody = (schema, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = schema.validate(req.body);
    if (!error) {
        next();
        return;
    }
    else {
        const extractedErrors = error.details.map((err) => err.message);
        return (0, apiResponses_1.unprocessibleContentResponse)(res, extractedErrors[0]);
    }
});
const loginSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required(),
});
const registrationSchema = joi_1.default.object({
    first_name: joi_1.default.string().required().max(30),
    last_name: joi_1.default.string().required().max(30),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(8).required(),
});
const loginValidation = () => {
    return (req, res, next) => {
        return validateBody(loginSchema, req, res, next);
    };
};
exports.loginValidation = loginValidation;
const registrationValidation = () => {
    return (req, res, next) => {
        return validateBody(registrationSchema, req, res, next);
    };
};
exports.registrationValidation = registrationValidation;
