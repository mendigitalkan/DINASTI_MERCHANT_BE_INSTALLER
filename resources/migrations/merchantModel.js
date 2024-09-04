/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('merchants', {
      ...ZygoteModel,
      merchant_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    merchant_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    merchant_logo: {
      type: DataTypes.STRING,
      allowNull: false
    }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('merchants')
  }
}
