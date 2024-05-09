'use strict';
const {Sequelize, DataTypes} = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    await queryInterface.createTable('Students', {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid: {
        allowNull: true,
        type: DataTypes.UUID,
        defaultValue:Sequelize.literal('uuid_generate_v4()'),
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      phone: {
        type:Sequelize.INTEGER,
        allowNull:true,
      },
      regNo:{
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
      },
      idNo:{
        type:Sequelize.INTEGER,
        allowNull:false,
        unique:true
      },
      feePayment:{
        type:Sequelize.STRING,
        allowNull:true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Students');
  }
};