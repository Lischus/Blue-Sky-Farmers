const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/controller.js');

class Group extends Model {}

Group.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    group_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'group',
  }
);

module.exports = Group;
