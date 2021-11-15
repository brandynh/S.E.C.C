const router = require('express').Router();
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

router.get('/dashboard', (req, res)=>{
  const memberDashboard = Member.findOne({
      where: {
          username: req.session.username,
          password: req.session.password
      }
  })
  res.render('dashboard', {
      memberDashboard,
      loggedIn: req.session.loggedIn
  })
});

router.get('/project/:id', async (req, res) => {
  
});

// Use withAuth middleware to prevent access to route
router.get('/profile', async (req, res) => {
  
});

module.exports = router;
