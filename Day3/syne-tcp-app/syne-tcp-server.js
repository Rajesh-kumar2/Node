const net = require("net");

const server = net.createServer()

server.on("connection",(socket)=>{
    let remoteAddress = socket.remoteAddress + " : " + socket.remotePort;
    console.log(`New connection from - ${remoteAddress}`);

    socket.on("data",(clientMessage)=>{
        console.log(`Message from Client ${remoteAddress} is ${clientMessage}`);
        socket.write(`Server said Hi - ${clientMessage}`);
    });

    socket.once("close", (hadError)=>{
        if(hadError){
            console.log("Something went wrong");
        }
        console.log("Coneection closed successfully");
        
    });
    socket.on("error",(err)=>{
        console.log(err.message);
    })
});

server.listen(8070,()=>{
    console.log("Synechron tcp server is running on port: 8070");
})
