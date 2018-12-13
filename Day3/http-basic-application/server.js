const http = require("http");
const fs = require("fs");


const server = http.createServer((request, response) => {
    response.writeHead(200, { "content-type": "text/html" });

    switch (request.method) {
        case "GET":
            if (request.url == "/") {
                var stream = fs.createReadStream(__dirname + "/public/index.html", "utf8");
                stream.pipe(response);

            }
            else if(request.url=="/home"){
                var stream = fs.createReadStream(__dirname + "/public/home.html", "utf8");
                stream.pipe(response);
            }
            else if(request.url=="/employees"){
                var stream = fs.createReadStream(__dirname + "/public/employees.html", "utf8");
                stream.pipe(response);
            }
            break;

        default:
            break;
    }
});

server.listen(3000, () => {
    console.log("Server is running on PORT : 3000");
});