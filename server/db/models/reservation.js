const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reservation.init({
    clientName: DataTypes.STRING,
    clientNumber: DataTypes.STRING,
    masterId: DataTypes.INTEGER,
    price: DataTypes.STRING,
    serviceId: DataTypes.INTEGER,
    time: DataTypes.STRING,
    date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Reservation',
  });
  return Reservation;
};
