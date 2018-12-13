const express = require("express");
const path = require("path");


const app = express();

app.use(express.static(path.join(__dirname, "/public")));


app.get("/home", (request, response) => {
    response.sendFile(path.join(__dirname , "/public/home.html"));
});
app.get("/events", (request, response) => {
    response.sendFile(path.join(__dirname , "/public/events.html"));
});
app.get("/employees", (request, response) => {
    response.sendFile(path.join(__dirname, "/public/employees.html"));
});
app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "/public/index.html"));
});
app.listen(3001, () => {
    console.log("Express Application is running on PORT : 3001");
})