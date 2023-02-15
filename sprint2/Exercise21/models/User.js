const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static initModel(sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        firstname: {
          type: DataTypes.STRING,
          notNull: true,
          notEmpty: true,
        },
        lastname: {
          type: DataTypes.STRING,
          notNull: true,
          notEmpty: true,
        },
        email: {
          type: DataTypes.STRING,
          notNull: true,
          notEmpty: true,
          unique: true,
        },
      },
      {
        sequelize,
        modelName: "user",
      },
    );
    return User;
  }
}

module.exports = User;
