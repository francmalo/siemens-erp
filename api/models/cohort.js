'use strict';
const {Sequelize, Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cohort extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Level}) {
      // define association here
      
       this.hasMany(Level , {foreignKey: 'cohortId'})

    }
  }
  Cohort.init({
    id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  uuid: {
    defaultValue:DataTypes.UUIDV4,
    primaryKey: true,
    type: Sequelize.UUID
  },
  cohortName: {
    type: Sequelize.STRING,
    allowNull:false,
    unique:true
  },
  startDate:{
    type:Sequelize.DATEONLY,
    allowNull:false
  },
  endDate:{
    type:Sequelize.DATEONLY,
    allowNull:false
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
    modelName: 'Cohort',
  });
  return Cohort;
};