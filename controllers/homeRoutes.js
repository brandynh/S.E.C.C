const router = require('express').Router();
const { response } = require('express');
const session = require('express-session');
const { Project, Member } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
    res.render('homepage', {
      loggedIn : req.session.loggedIn
    });
});

router.get('/login', (req, res)=>{
  console.log('Login Page');
  if(req.session.loggedIn){
      res.redirect('/');
  }
  res.render('login', {
      loggedIn: req.session.loggedIn
  });
  return;
});



router.get('/signup', (req, res) => {
  res.render('signup')
});



//Returns a list of all user. FOr development only
router.get('/allUsers', async (req, res)=>{
  try{
      const allMembers = await Member.findAll();
      res.status(200).json(allMembers); 
  } catch(err) {
      console.log(err);
      res.status(500).json(err);
  }
});

router.get('/join-project', (req, res) =>{
  res.render('addcode', {
    loggedIn: req.session.loggedIn
  })
});

router.get('/create-project', (req, res)=>{
  res.render('createProject', {
    loggedIn: req.session.loggedIn
  });
});

//Dashboard dynamically render Logged in user
router.get('/dashboard', async (req, res)=>{
  try{
    const memberDashboard = await Member.findOne({
        where: {
            username: req.session.username,
            password: req.session.password
        }
    });

    if(!memberDashboard){
      res.status(500).json({message: 'User not found'});
    }
    
    const member = memberDashboard.get({ plain: true })

    console.log(member);

    res.render('dashboard', {
        member,
        loggedIn: req.session.loggedIn
    });

  } catch (err) {
    res.json(err);
  }
});

router.get('/project/:id', async (req, res) => {
  
});

// Use withAuth middleware to prevent access to route
router.get('/profile', async (req, res) => {
  
});

module.exports = router;
