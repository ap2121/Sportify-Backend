'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Post, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
      User.belongsToMany(models.Sport, {through: models.SportUser, as: 'sport_list', foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
      User.hasMany(models.Comment, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    }
  }
  User.init({
    username: {
     type: DataTypes.STRING,
     allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
     },
    password: {
      type: DataTypes.STRING,
      allowNull: false
     }
     
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};