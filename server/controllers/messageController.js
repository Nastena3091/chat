const Message = require('../models/message')
module.exports = {
    createMessage: (req, res) =>{
        var new_message = new Message(req.query)
        new_message.save(function(err,message){
            if (err) res.status(400).send(err);
            res.json(message)
        })
    },
}