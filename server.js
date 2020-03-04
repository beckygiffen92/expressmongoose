var express = require('express');        //accessing express library
var app = express();        //accessing a part of express library
var mongoose = require('mongoose'); //required mongoose

mongoose.connect('mongodb://localhost: 27017/test').then(() =>{ //connectd to mongoose
    console.log('Connected'); //waits for message to let us know we r connected 
}
)
.catch(err => {
    console.log('Not Connected to DB'); //if we r not connected
})


app.get('/', (req, res) => { //fat arrow means function
    res.send('This is the homepage'); //send this info to /

});

app.get('/about', (req, res) => { //fat arrow means function
    res.send('This is the aboutpage'); //send this info to /

});
app.get('/contact', (req, res) => { //fat arrow means function
    res.send('This is the contact page'); //send this info to /

});

app.get('/extras', (req, res) => { //fat arrow means function
    res.send('This is the extra page'); //send this info to /

});


//listening to request for port no 3000 vv
app.listen(3000, () => {        //fat arrow for callback
    console.log('Server listening on port 3000');
}); 