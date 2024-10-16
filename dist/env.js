"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const requiredEnv = (key) => {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Environment variable ${key} is required`);
    }
    return value;
};
// Load and validate environment variables
const env = {
    NODE_ENV: requiredEnv('NODE_ENV'),
    PORT: Number(requiredEnv('PORT')),
    DATABASE_URL: requiredEnv('DATABASE_URL'),
    REDIS_PORT: Number(requiredEnv('REDIS_PORT')),
    REDIS_HOST: requiredEnv('REDIS_HOST'),
    JWT_TOKEN: requiredEnv('JWT_TOKEN')
};
exports.default = env;
