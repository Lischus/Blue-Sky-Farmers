const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/controller.js");


class Result extends Model {}

Result.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
    }
    },
    user_answers: [{
      type: DataTypes.STRING,
      allowNull: false,
    }],

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
