const Member = require('./Member');
const ProjectPost = require('./ProjectPost');
const Project = require('./Project');
const ProjectMember = require('./ProjectMember')

Member.belongsToMany(Project, {
  foreignKey: 'project_id',
  onDelete: 'CASCADE',
  through: ProjectMember
});

Project.belongsToMany(Member, {
  foreignKey: 'project_id',
  onDelete: 'CASCADE',
  through: ProjectMember
})

Member.hasMany(ProjectPost, {
  foreignKey: 'member_id',
  onDelete: 'CASCADE'
});

ProjectPost.belongsTo(Member, {
  foreignKey: 'member_id'
});

ProjectPost.belongsTo(Project, {
  foreignKey: 'project_id'
})

Project.hasMany(ProjectPost, {
  foreignKey: 'project_id'
})

module.exports = { Member, ProjectPost, Project };
