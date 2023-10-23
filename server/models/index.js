const mongoose = require('mongoose')
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

mongoose.connect('mongodb://127.0.0.1:27017/chat')
    .then(()=>{
        console.log('Connection OK')
    })
    .catch((error)=>{
        console.log(error)
    })

const db = {}

fs
    .readdirSync(__dirname)
    .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename) &&
        (file.slice(-3) === '.js');
    })
    .forEach((file) => {
    const model = require(path.join(__dirname, file));
    db[ model.modelName ] = model;
    });

db.mongoose = mongoose

module.exports = db;



