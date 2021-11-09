const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    res.render('homepage');
});

router.get('/project/:id', async (req, res) => {
  
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  
});

router.get('/login', (req, res) => {
  
});

module.exports = router;
