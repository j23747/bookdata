const { response, request } = require("express");
const express = require("express");

const app = express();
const port = 3000;

// creating a simple GET  endpoint

app.get('/', (req, response) => {
    response.send("Hello World, from express");
});

app.post('/', (request, response) => {
    response.get("Hello, get method!");
});

// start our clients

app.listen(port, () => console.log("Hello World app listening on ${port}!"))