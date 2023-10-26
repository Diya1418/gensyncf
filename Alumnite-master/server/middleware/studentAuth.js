var {Student} = require('../models/studentModel.js');


var studentAuth = (req, res, next) => {
    var token = req.header('x-auth');
    
    if(!token){
        console.log('Token not found in the header'); 
        res.status(400).send({'err': 'User not logged in.'})
    }

    Student.findByToken(token)
        .then((student) => {
            if(!student) {
                console.log('Invalid credentials'); 
                res.status(400).send({'err': "Invalid credentials."});
            }

            req.student = student;
            req.token = token;

            next();
        })
        .catch((err) => {
            console.log('Error in findByToken:', err);
            res.status(400).send(err);
        });
};

module.exports = {studentAuth};