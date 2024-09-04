/* eslint-disable @typescript-eslint/space-before-function-paren */
'use strict'
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        user_id: 'b1894f1e-f6ca-43f8-b8af-efcd8b5fdfbd',
        user_name: 'admin',
        user_email: 'admin@mail.com',
        user_password: '91f284ea6cc6f77fb50743f8eb925e3d5e198a9a',
        user_role: "admin"
      },
      {
        user_id: '1e92f201-1963-4cb5-8ac2-cb703c737564',
        user_name: 'super admin',
        user_email: 'superAdmin@mail.com',
        user_password: '91f284ea6cc6f77fb50743f8eb925e3d5e198a9a',
        user_role: "superAdmin"

      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
}
