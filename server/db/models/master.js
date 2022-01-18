const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Service, Master }) {
      this.belongsToMany(Service, { as: "Master", foreignKey: "masterId", through: 'MasterService' });
      // define association here
    }
  }
  Master.init({
    name: DataTypes.TEXT,
    category: DataTypes.TEXT,
    picture: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Master',
  });
  return Master;
};
