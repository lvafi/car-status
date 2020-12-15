// the only thing we need to do to get express up and running is to import it using requiew  
const express = require('express');
// this express that has imported is acting like a function so we call it and return value of that function is an app object 
const app = express();
// app is an object that has methods you use to build a web server

//app is an object that has methods you use to build a web server
app.get("/hello_world", (request, response) => {
    response.send("Hello World!");
});

const ADDRESS = 'localhost'
const PORT = 3000;
app.listen(3000, () => {
    console.log(`Server listening on ${ADDRESS}: ${PORT}`);
});