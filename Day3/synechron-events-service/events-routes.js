const express = require("express");
const eventRoutes = express.Router();

const  eventDal = require("./dal/events.dal");

eventRoutes.get("/",(request, response)=>{
    eventDal.getAllEvents().then((data)=>{
        response.json(data);
    },(reason)=>{
        response.send(reason);
    });
});

eventRoutes.get("/:id",(request, response)=>{
    let eventId = request.params.id;
    eventDal.getSingleEvent(eventId).then((data)=>{
        response.json(data);
    },(reason)=>{
        response.send(reason);
    });
});

eventRoutes.post("/", (request, response)=>{
    let event = request.body;
    eventDal.insertNewEvent(event).then((event)=>{
        response.json(event)
    },(reason)=>{
        response.send(reason);
    });
});

module.exports = eventRoutes;