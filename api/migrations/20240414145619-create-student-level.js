'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('studentLevels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      levelId:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Levels',
          key:'id'
        },
      cohortId:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Cohorts',
          key:'id'
        },
      }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('studentLevels');
  }
};