"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.users = void 0;
const model_1 = require("./model");
let users = (req, res) => {
    let users = [
        new model_1.User('James Coonce', 'jcoonce', 'james@none.com'),
        new model_1.User('Jim Coonce', 'jimcoonce', 'jim@none.com'),
        new model_1.User('Norman', 'jcoonce', 'norman@none.com'),
    ];
    res.json(users);
};
exports.users = users;
let create = (req, res) => {
    res.json(req.body);
};
exports.create = create;
