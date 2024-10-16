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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiResponses_1 = require("../utils/apiResponses");
const errorHandlers_1 = require("../utils/errorHandlers");
const UserServices_1 = __importDefault(require("./UserServices"));
const argon2_1 = __importDefault(require("argon2"));
const errors_1 = require("../utils/errors");
const JwtService_1 = __importDefault(require("../services/JwtService"));
class UserController {
    constructor() {
        /**
         * Login User in
         * @param req
         * @param res
         * @returns
         */
        this.Login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const jwt = new JwtService_1.default();
            try {
                const user = yield this.userService.getUserByEmail(data.email);
                if (!user)
                    throw new errors_1.NotFoundError("User not found");
                const verificationStatus = yield argon2_1.default.verify(user.password, data.password);
                if (!verificationStatus)
                    throw new errors_1.UnauthorizedError("Incorrect password");
                const { password } = user, userWithoutPassword = __rest(user, ["password"]);
                const token = jwt.generateToken({ email: user.email, id: user.id, duration: '2' });
                return (0, apiResponses_1.successResponse)(res, "Login successful", { user: userWithoutPassword, token });
            }
            catch (error) {
                (0, errorHandlers_1.errorHandler)(res, error);
            }
        });
        /**
         * User Registration
         * @param req
         * @param res
         * @returns
         */
        this.Register = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { first_name, last_name, email, password } = req.body;
            try {
                //Save user details
                const user = yield this.userService.createUser({
                    firstName: first_name,
                    lastName: last_name,
                    email: email,
                    password: (yield argon2_1.default.hash(password)),
                });
                return (0, apiResponses_1.createdResponse)(res, "User created succesfully", user);
            }
            catch (error) {
                return (0, errorHandlers_1.errorHandler)(res, error);
            }
        });
        this.userService = new UserServices_1.default();
    }
}
exports.default = UserController;
