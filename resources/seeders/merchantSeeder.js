/* eslint-disable @typescript-eslint/space-before-function-paren */
'use strict'
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('merchants', [
      {
        merchant_id: 'b1894f1e-f6ca-43f8-b8af-efcd8b5fdfbd',
        merchant_name: 'merchant 1',
        merchant_logo: 'https://www.patterns.dev/img/reactjs/react-logo@3x.svg',
      },
     
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('merchants', null, {})
  }
}
