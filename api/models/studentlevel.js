'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class studentLevel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Level , Student}) {
      // define association here
      this.belongsTo(Level, {foreignKey: 'levelId'});
      this.belongsTo(Student , {foreignKey: 'studentId'})
    }
  }
  studentLevel.init({
    status:{ 
    type:DataTypes.BOOLEAN,
    allowNull: false
  }
  }, {
    sequelize,
    modelName: 'studentLevel',
  });
  return studentLevel;
};