const router = require('express').Router();
const { json } = require('express');
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');
const { Member } = require('../../models');
const { ProjectPost } = require('../../models')

router.post('/create-project', async (req, res) => {
    console.log('here');
    try{
        const member = await Member.findOne({
            where:{
                username: req.session.username,
                password: req.session.password
            }
        });

        const memberId = member.id;        

        const newProject = await Project.create(
            {
                name: req.body.name,
                description: req.body.description,
                date_created: req.body.date_created,
                projectCode: req.body.projectCode,
                member_id : memberId
            }
        );
        res.status(200).redirect('/dashboard');
        
    } catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/postProject', async (req, res) => {
    console.log('here')
    try{
        const newPost = await ProjectPost.create(
            {
                title: req.body.title,
                comment: req.body.comment,
                member_id: req.session.memberId,
                project_id : req.body.projectId
            }
        );
        res.status(200).redirect(req.get('referer'));
    } catch( err ) {
        console.log(err)
        res.status(500).json(err);
    }
});


router.delete('/:id', withAuth, async (req, res) => {
  
});

module.exports = router;
