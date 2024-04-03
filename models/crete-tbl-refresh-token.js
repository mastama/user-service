'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class crete - tbl - refresh - token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  crete - tbl - refresh - token.init({
    id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'crete-tbl-refresh-token',
  });
  return crete - tbl - refresh - token;
};