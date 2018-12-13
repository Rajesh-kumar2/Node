const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongojs = require("mongojs");
const jwt = require("jsonwebtoken");

const config = require("./config");

const app = express();

const db = mongojs("rajesh-db",["users"]);

app.set("synechronSecret", config.secret);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan("dev"));

app.get("/",(request, response)=>{
    response.send("<h1>Welcome to Synechron Token Authentication Example!!!</h1>")
});

const authRoutes = express.Router();

authRoutes.post("/syneauth", (request,response)=>{
    db.users.findOne({userName:request.body.name},(err, user) =>{
        console.log(user.userName);
        if(err) throw err;
        if(!user){
            response.json({success:false, message:"Access denied! Please check your user name"});
        }else if(user){
            if(user.password!==request.body.password){
                response.json({success:false, message:"Access denied! Please check your password"});
            }else{
                var token = jwt.sign(user,app.get("synechronSecret"),{expiresIn:2000});
                response.json({
                    success:true, 
                    message:"Please save this token",
                    token: token
                })
            }
        }
    });
});

authRoutes.use((request,response,next)=>{
    let token = request.body.token || request.query.token ||request.headers["x-access-token"];
    if(token){
        jwt.verify(token,app.get("synechronSecret"),(err, decoded)=>{
            if(err){
                return response.json({
                    success:false,
                    message: "We are unable to verify the token"
                });
            }else{
                request.decoded = decoded;
                next();
            }
        })
    }else{
        return response.json({
            success:false,
            message: "Please send the valid token"
        });
    }
});

authRoutes.get("/",(request, response)=>{
    response.json({
        message:"Synechron has authenticated you!"
    });
});

authRoutes.get("/users",(request, response)=>{
    db.users.find((err, documents)=>{
        response.json(documents);
    })
});

app.use("/api",authRoutes);

app.listen(config.port,()=>{
    console.log(`Auth Service is listening on port :  ${config.port}`);
});