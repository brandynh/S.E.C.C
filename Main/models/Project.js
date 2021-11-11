const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {
  checkPassword(projectCode) {
    return bcrypt.compareSync(projectCode, this.projectCode);
  }
}
Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    member_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'member',
        key: 'id',
      },
    },
    projectLead_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'projectLead',
        key: 'id'
      },
    },
    projectCode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {

    hooks: {
      beforeCreate: async (newProjectData) => {
        newProjectData.projectCode = await bcrypt.hash(newProjectData.projectCode, 10);
        return newProjectData;
      },
      beforeUpdate: async (updatedProjectData) => {
        updatedProjectData.projectCode = await bcrypt.hash(updatedProjectData.projectCode, 10);
        return updatedProjectData;
      },
    },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
  }
);

module.exports = Project;
