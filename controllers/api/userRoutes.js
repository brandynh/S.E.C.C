const router = require('express').Router();
const { response } = require('express');
const { Member, Project } = require('../../models');

router.post('/', async (req, res) => {
  
});

//Handle login
router.post('/signup', async (req, res) =>{
    console.log(req.body);
    try{
      const newMember = await Member.create({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      is_project_lead: false
    });
  
    // save cookie that saves the login or logout feature
    req.session.save(()=>{
      req.session.loggedIn = true;
      res.status(200).redirect('/');
    });
  
  
    } catch (err){
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  router.post('/login', async (req, res) => {
    try{
      const loggedUser = await Member.findOne({
          where: {
              username: req.body.username,
              password: req.body.password
          },
          include: [
              {
                  model: Project
              }
          ]
      });
  
      if(!loggedUser){
          res.status(400).json({message: 'Incorrect user credentials'});
      }
  
      req.session.save(() =>{
          req.session.loggedIn = true;
          console.log('session Id: ' + req.sessionID)
          req.session.username = req.body.username;
          req.session.password = req.body.password;
          req.session.memberId = loggedUser.get('id');
          //May need to add member id to be passed into project memberid reference
          res.status(200).json({message: 'user logged in'});
          console.log(req.session.loggedIn);
      });
    } catch( err ){
      console.log(err);
      res.status(500).json(err);
    }
  });



router.post('/logout', (req, res) => {
    console.log(req.sessionID)
    if(req.session.loggedIn){
        req.session.destroy(()=>{
            res.status(204).end();
            // req.session.loggedIn = false;
            // console.log(req.session.loggedIn);
        });
    } else {
        res.status(404).end();
    }
});




module.exports = router;
