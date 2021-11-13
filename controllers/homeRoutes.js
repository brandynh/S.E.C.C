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

router.post('/signup', (req, res) =>{
    console.log(req.body);
});

module.exports = router;
