"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promoController = void 0;
const create_1 = require("./create");
const find_1 = require("./find");
const remove_1 = require("./remove");
const update_1 = require("./update");
exports.promoController = {
    create: create_1.createPromo,
    findAll: find_1.findAllPromo,
    findOne: find_1.findOnePromo,
    remove: remove_1.removePromo,
    update: update_1.updatePromo
};
