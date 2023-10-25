const User = require('../models/user')
module.exports = {
    createUser: (req, res) =>{
        console.log('body: '+ req.body)
        res.send('asd').status(200)
        // var new_user = new User(req.body)
        // new_user.save(function(err,user){
        //     if (err) res.status(400).send(err);
        //     res.json(user)
        // })
    },
    findUser: (req, res) => {
        User.findById(req.params.userId, function (err, user){
            if(err) res.status(400).send(err);
            res.json(user)
        })
    }
}