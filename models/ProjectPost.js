const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProjectPost extends Model {}

ProjectPost.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        comment: {
            type: DataTypes.STRING
        },
         member_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'member',
                key: 'id'
            }
          },
          project_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'project',
              key: 'id'
            }
          }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'projectPost'
    },
    );

    module.exports = ProjectPost;