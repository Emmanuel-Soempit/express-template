"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("../controllers/UserController"));
const Validators_1 = require("../middlewares/Validators");
const authRouter = express_1.default.Router();
const userController = new UserController_1.default();
authRouter.post('/auth/login', (0, Validators_1.loginValidation)(), userController.Login);
authRouter.post('/auth/register', (0, Validators_1.registrationValidation)(), userController.Register);
exports.default = authRouter;
