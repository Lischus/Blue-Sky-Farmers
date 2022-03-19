const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/controller.js');

class Result extends Model {}

Result.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    user_answer_one: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_answer_two: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_answer_three: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_answer_four: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_answer_five: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      refernces: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'result',
  }
);

module.exports = Result;
