
// make a express app
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://testCode:UjdTzZCwDPrvCI9G@testdb.zk8pkaq.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.use(express.json());

const userModel = require('./model/user.model');



app.get('/', (req, res) => {
    res.send("hello world");
});


app.post('/test', (req, res) => {
    try {
        let newuser = new userModel(req.body);
        newuser.save();
        if (newuser) {
            res.send(newuser);
        } else {
            res.send("error");
        }
    }
    catch (err) {
        console.log(err);
    }
});



app.listen(3000, () => {
    console.log('listening on 3000');
});