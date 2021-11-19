const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProjectMember extends Model {}

ProjectMember.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          project_id : {
              type: DataTypes.INTEGER,
              references: {
                  model: 'project',
                  key: 'id'
              }
          },
          member_id: {
              type: DataTypes.INTEGER,
              references: {
                  model: 'member',
                  key: 'id'
              }
          }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'projectMember',
    }
);

module.exports = ProjectMember;