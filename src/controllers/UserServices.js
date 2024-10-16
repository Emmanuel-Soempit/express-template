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
const database_1 = __importDefault(require("../config/database"));
const errors_1 = require("../utils/errors");
("../config/database");
class UserService {
    constructor() {
        this.createUser = (data) => __awaiter(this, void 0, void 0, function* () {
            //Throw error if user aleready exist
            if (yield this.getUserByEmail(data.email))
                throw new errors_1.BadRequestError("Email already exist");
            const user = yield this.userModel.create({
                data,
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true,
                },
            });
            if (!user)
                throw new errors_1.InternalServerError("Error creating user");
            return user;
        });
        this.getUserByEmail = (email) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userModel.findFirst({
                where: { email },
            });
            return user;
        });
        this.userModel = database_1.default.user;
    }
}
exports.default = UserService;
