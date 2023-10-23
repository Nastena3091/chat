const User = require('../models/user')
module.exports = {
    createUser: async (req, res) =>{
        try {
            console.log(req.query)
            const createUser = await User.create(req.query)
            await res.status(200).send(createUser)
        } catch (error){
            console.error(error)
        }
    }
}