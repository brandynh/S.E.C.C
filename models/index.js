const Member = require('./Member');
const ProjectPost = require('./ProjectPost');
const Project = require('./Project');

Member.hasMany(Project, {
  foreignKey: 'member_id',
  onDelete: 'CASCADE'
});

Member.hasMany(ProjectPost, {
  foreignKey: 'member_id',
  onDelete: 'CASCADE'
});

ProjectPost.belongsTo(Member, {
  foreignKey: 'member_id'
});


module.exports = { Member, ProjectPost, Project };
