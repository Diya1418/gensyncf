const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/da',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4
 
 }).catch(error => {
    console.error("MongoDB connection error:", error);
});

const db= mongoose.connection;
db.on('error',console.error.bind(console,"error connections to mongodb"));

db.once('open', function(){
    console.log('connected to database:: mongodb');
})

module.exports = db;