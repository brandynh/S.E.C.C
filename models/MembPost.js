const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MemberPost extends Model {}
// May be changed rto ProjectPost

MemberPost.init(
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
          // projectLead_id: {
          //   type: DataTypes.INTEGER,
          //   references: {
          //     model: 'member',//changed from `projectLead` to `member`
          //     key: 'id'
          //   },
          // },
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
            },
          },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'memberPost'
    },
    );

    module.exports = MemberPost;