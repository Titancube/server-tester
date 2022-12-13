"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res, next) => {
    try {
        return res.status(200).send('Success');
    }
    catch (error) {
        return res.status(500).send('Error');
    }
});
app.listen(8004, () => {
    console.log('app is running');
});
