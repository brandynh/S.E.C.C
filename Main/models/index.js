const ProjectLead = require('./ProjectLead')
const ProjLeadPost = require('./ProjLeadPost')
const Member = require('./Member');
const MemberPost = require('./MembPost');
const Project = require('./Project');

ProjectLead.hasMany(Project, {
  foreignKey: 'projectLead_id',
  onDelete: 'CASCADE'
});

ProjectLead.hasMany(Member, ProjLeadPost, {
  foreignKey: 'projectLead_id'
});

ProjectLead.hasMany(ProjLeadPost, {
  foreignKey: 'projectLead_id',
  onDelete: 'CASCADE'
})

Member.hasMany(Project, {
  foreignKey: 'member_id',
  onDelete: 'CASCADE'
});

Member.hasMany(ProjectLead, {
  foreignKey: 'member_id'
});

Member.hasMany(MemberPost, {
  foreignKey: 'member_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(ProjectLead, {
  foreignKey: 'projectLead_id'
});

ProjLeadPost.belongsTo(ProjectLead, {
  foreignKey: 'projectLead_id'
});

MemberPost.belongsTo(Member, {
  foreignKey: 'member_id'
});

module.exports = {ProjectLead, ProjLeadPost, Member, MemberPost, Project };
