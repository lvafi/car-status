const express = require('express');
const app = express();

//app is an object that has methods you use to build a web server
app.get("/hello_world", (request, response) => {
    response.send("Hello World!");
});


app.listen(3000, () => {
    console.log('Express web app on localhost: 3000');
});