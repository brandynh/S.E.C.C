const router = require('express').Router();
const { Project, Member } = require('../models');
const withAuth = require('../utils/auth')



router.get('/', async (req, res) => {
    res.render('homepage');
});

router.get('/project/:id', async (req, res) => {
  
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  
});

router.get('/signup', (req, res) => {
  res.render('signup')
});

router.post('/signup', async (req, res) =>{
  console.log(req.body);
  try{
    const newMember = await Member.create({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    isProjectLead: false
  });
  res.status(200).json({member: newMember, message: 'New Member created'});
  } catch (err){
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;