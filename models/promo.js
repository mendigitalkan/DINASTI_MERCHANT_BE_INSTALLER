"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromoModel = void 0;
/* eslint-disable @typescript-eslint/indent */
const sequelize_1 = require("sequelize");
const _1 = require(".");
const zygote_1 = require("./zygote");
exports.PromoModel = _1.sequelize.define('Promo', {
    ...zygote_1.ZygoteModel,
    promoId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        defaultValue: (0, sequelize_1.UUIDV4)()
    },
    promoName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    promoDescription: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    ..._1.sequelize,
    timestamps: false,
    tableName: 'promotion',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
});
