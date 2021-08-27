'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pedido.belongsTo(Cliente);
      Pedido.belongsTo(servico);
    }
  };
  Pedido.init({
    idCliente: DataTypes.INTEGER,
    idservico: DataTypes.INTEGER,
    valor: DataTypes.FLOAT(6,2),
    data : DataTypes.DATEONLY     
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};