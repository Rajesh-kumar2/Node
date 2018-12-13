const https = require("https");
const fs = require("fs");

const options = {
    key:fs.readFileSync("synechronkey.pem"),
    cert:fs.readFileSync("synechroncert.pem")
};

https.createServer(options,(request, response)=>{
    response.writeHead(200,{"content-types":"text/html"});
    response.write("<h1>Welcome to synechron ssl portal!!!</h1>");
}).listen(3333,()=>{
    console.log("Synechron secure portal running on port: 3333");
    
})