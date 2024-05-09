'use strict';
const { Sequelize, Model } = require('sequelize');
const level = require('./level');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({studentLevel}) {
      // define association here
       this.hasMany(studentLevel, {foreignKey: 'studentId'})
    }
    toJSON(){
      return { ...this.get(), id: undefined}
    }
  }
  Student.init({
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    uuid: {
    defaultValue:DataTypes.UUIDV4,
    primaryKey: true,
    type: Sequelize.UUID
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
  }, {
    sequelize,
    modelName: 'Student',
  });
  
  return Student;
};