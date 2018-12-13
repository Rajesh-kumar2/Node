const mongojs = require("mongojs");
const db = mongojs("rajesh-db",["events"])

class EventDal{
    getAllEvents(){
        return new Promise((resolve, reject)=>{
            db.events.find((err, documents)=>{
                if(err){
                    reject(err.message);
                }
                resolve(documents)
            });
        });
    }
    getSingleEvent(eventID){
        return new Promise((resolve,reject)=>{
            db.events.findOne({eventID:Number.parseInt(eventID)},(err,document)=>{
                if(err){
                    reject(err.message);
                }
                resolve(document);
            });
        });
    }
    insertNewEvent(event){
        return new Promise((resolve, reject)=>{
            db.events.insert(event,(err)=>{
                if(err){
                    reject(err.message);
                }resolve(event);
            })
        });
    }
    /* deleteAnEvent(evenID){

    }
    updateAnEvent(evenID){

    } */
}

module.exports = new EventDal();