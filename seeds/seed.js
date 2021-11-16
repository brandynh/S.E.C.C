const sequelize = require('../config/connection');
const {Member, Project } = require('../models');

const memberData = require('./memberData.json');
const projectData = require('./projectData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const members = await Member.bulkCreate(memberData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Project.create({
      ...project,
      member_id: members[Math.floor(Math.random() * members.length)].id,
      // projectLead_id: projectLeads[Math.floor(Math.random() * projectLeads.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
