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
    if(req.session.loggedIn){
        res.redirect('/');
    }
    res.render('login');
    return;
});

router.post('/', async (req, res) => {
  
});

//Handle login
router.post('/login', async (req, res) => {
  try{
    const loggedUser = await Member.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    });

    if(!loggedUser){
        res.status(400).json({message: 'Incorrect user credentials'});
    }

    req.session.save(() =>{
        req.session.loggedIn = true;
        res.status(200).json({user: loggedUser, message: 'user logged in' })
    });
  } catch( err ){
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
    if(req.session.loggedIn){
        req.session.destroy(()=>{
            res.status(204).end();
        });
    } else {
        res.status(404).end
    }
});

module.exports = router;
