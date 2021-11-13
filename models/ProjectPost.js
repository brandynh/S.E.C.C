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
<<<<<<< HEAD:models/ProjectPost.js
=======
          /* projectLead_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'member',//changed from `projectLead` to `member`
              key: 'id'
            },
          }, */
>>>>>>> d9ca0268ff01d304e29bd188677fd3a19b7e2bfa:models/MembPost.js
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
        modelName: 'memberPost'
    },
    );

    module.exports = ProjectPost;