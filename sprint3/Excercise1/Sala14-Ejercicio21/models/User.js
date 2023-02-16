const { Sequelize, Model, DataTypes } = require("sequelize");
const { isEmail } = require("validator");

class User extends Model {
  static initModel(sequelize) {
    User.init(
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: DataTypes.INTEGER,
        },
        firstname: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        lastname: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        mail: {
          allowNull: false,
          type: DataTypes.STRING(50),
          validate: {
            isEmail: {
              msg: "Invalid email format",
            },
          },
        },
      },
      { sequelize, modelName: "user", timestamps: false },
    );
    return User;
  }
}

module.exports = User;
