const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
// const db = require('./config/mongoose');
const mongoose = require('mongoose');
var sockets = require('./server/loaders')
const router = require('./server/routes');
require('dotenv').config();

const PORT = process.env.PORT || 4000;

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());
app.use('/', router);

app.get("/getData",(req,res)=>{
    res.send("Hello");
})
mongoose.set('useFindAndModify', false);
// mongoose.connect(
//     process.env.MONGODB_URI, 
//     {
//         useNewUrlParser : true,
//         autoIndex: true
//     }
// );
mongoose.connect('mongodb://localhost/ad',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4
 
 }).catch(error => {
    console.error("MongoDB connection error:", error);
});
const connection = mongoose.connection;
connection.once('open', function(){
    console.log("MongoDB connection established successfully.");
})

const server = app.listen(PORT, function(){
    console.log("Server is running on port : ", PORT );
});

sockets.init(server);

module.exports = app;