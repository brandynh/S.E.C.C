const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProjLeadPost extends Model {}

ProjLeadPost.init(
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
          projectLead_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'projectLead',
              key: 'id'
            },
          },
          project_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'project',
              key: 'id'
            },
          },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'projLeadPost'
    },
    );

    module.exports = ProjLeadPost;