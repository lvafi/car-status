// the only thing we need to do to get express up and running is to import it using requiew  
const express = require('express');
const { response } = require('express');
// this express that has imported is acting like a function so we call it and return value of that function is an app object 
const app = express();
// app is an object that has methods you use to build a web server

//app is an object that has methods you use to build a web server
app.get("/hello_world", (request, response) => {
    response.send("Hello World!");
});

// route is basicly a function that will handle some sort of request coming into our applecation
app.get('/hello_world', (request, response) => {
    response.send('Hello World');
})

const DOMAIN = 'localhost'
const PORT = 3000;
app.listen(3000, () => {
    console.log(`The server is listening at ${DOMAIN}:${PORT}`);
});