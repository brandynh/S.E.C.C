const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');
const { Member } = require('../../models');
const { ProjectPost } = require('../../models');

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

router.put('/projectPost/:id', async (req, res) =>{
    console.log('jere')
    try{
        const updatedPost = await ProjectPost.findOne({
            where: {
                id: req.params.id
            }
        });
        
        await ProjectPost.update(
            {
                title: req.body.newTitle,
                comment: req.body.newComment
            },
            {
                where: {
                    id: req.params.id
                }
            }
        )

        res.status(200).json({message: 'Requst completed'});
    } catch (err) {
        console.log(err)
        res.status(500).json(err); 
    }
});

router.delete('/projectPost/:id', async (req, res) => {
    try{
        await ProjectPost.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json('Delete Success')
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;
