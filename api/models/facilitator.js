'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Facilitator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Facilitator.init({
    uuid: {
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID
    },  
    firstName: {
      type:DataTypes.STRING,
      allowNull:false},

    lastName: {
      type:DataTypes.STRING,
      allowNull:false},

    email: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,},
    gender:{
      type:DataTypes.STRING,
      allowNull:false
    },

    idNo:{
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,},

    phoneNo:{
      type:DataTypes.INTEGER,
      allowNull:false
    }

  }, {
    sequelize,
    modelName: 'Facilitator',
  });
  return Facilitator;
};