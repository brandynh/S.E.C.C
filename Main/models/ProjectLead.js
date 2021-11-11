const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class ProjectLead extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

ProjectLead.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newProjectLeadData) => {
        newProjectLeadData.password = await bcrypt.hash(newProjectLeadData.password, 10);
        return newProjectLeadData;
      },
      beforeUpdate: async (updatedProjectLeadData) => {
        updatedProjectLeadData.password = await bcrypt.hash(updatedProjectLeadData.password, 10);
        return updatedProjectLeadData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'projectLead',
  }
);

module.exports = ProjectLead;
