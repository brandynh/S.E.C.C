const sequelize = require('../config/connection');
const {Member, Project, ProjectPost } = require('../models');
const memberData = require('./memberData.json');
const projectData = require('./projectData.json');
const projectPostData = require('./projectPostData.json');

const seedDatabase = async () => {
  try{
    await sequelize.sync({ force: true });

    const members = await Member.bulkCreate(memberData, {
      individualHooks: true,
      returning: true,
    });

    for (const project of projectData) {
      await Project.create({
        ...project,
        member_id: members[Math.floor(Math.random() * members.length)].id,
      });
    }

    const projectPosts = await ProjectPost.bulkCreate(projectPostData, {
      individualHooks: true,
      returning: true
    })

    for (const projectPost of projectPostData) {
      await ProjectPost.create({
        ...projectPost,
        project_id: members[Math.floor(Math.random() * projectPosts.length)].id,
      });
    }

    

    process.exit(0);
  } catch (err) {
    console.log(err);
  }
};

seedDatabase();
