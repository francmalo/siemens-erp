'use strict';
const {Sequelize, Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Level extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Cohort, studentLevel}) {
      // define association here
      this.hasMany(studentLevel, {foreignKey: 'levelId'})
      this.belongsTo(Cohort ,{foreignKey: 'cohortId'})
    }
  }
  Level.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.UUID
    },
    uuid: {
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true,
      type: Sequelize.UUID
    },
    levelName: {
      type: Sequelize.STRING
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
    },
    cohortId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Cohorts',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Level',
  });
  return Level;
};