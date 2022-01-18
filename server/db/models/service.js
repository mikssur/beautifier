const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category, Master }) { // ,Master
      this.belongsToMany(Master, { through: 'Reservation' });
      this.belongsTo(Category, { foreignKey: 'categoryId' });
      this.belongsToMany(Master, { through: 'MasterService' });

      // define association here
    }
  }

  Service.init({
    name: DataTypes.TEXT,
    categoryId: DataTypes.TEXT,
    price: DataTypes.TEXT,
    picture: DataTypes.TEXT,
    description: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Service',
  });
  return Service;
};
