'use strict';

 /** @type {import('sequelize-cli').Migration} */
 module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Students', [{
       firstName: 'John1',
       lastName: 'Doe',
       email: 'johnDoe3.gmail.com',
       phone:1222352,
       regNo:'12345682',
       idNo:12345692,
       feePayment:'paid',
       createdAt: new Date(),
       updatedAt:new Date(),


     }], {})
    
   },

   async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Students', null, {})
  },
 };
