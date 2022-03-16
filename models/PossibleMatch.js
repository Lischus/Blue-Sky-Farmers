const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/controller.js');

class PossibleMatch extends Model {}

PossibleMatch.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_one: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_two: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'possibleMatch',
  }
);

module.exports = PossibleMatch;
