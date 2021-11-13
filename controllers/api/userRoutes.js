const router = require('express').Router();
const { Member } = require('../../models');



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

router.get('/login', (req, res)=>{
    res.render('login');
});

router.post('/', async (req, res) => {
  
});

router.post('/login', async (req, res) => {
  
});

router.post('/logout', (req, res) => {
    
});

module.exports = router;
