const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

const MONGO_URL = "mongodb+srv://sahitya:helloroot123@sahitya.unfftxk.mongodb.net/?appName=Sahitya" ;

let _db;

const mongoConnect =(callback)=>{
    MongoClient.connect(MONGO_URL).then(client=>{
        _db=client.db('staynest');
        callback();
    }).catch(error=>{
        console.log('Error while connecting to MongoDB: ',error);
    });
};

const getDB=()=>{
    if(!_db)
    {
        throw new Error('Mongo not connected');
    }
    return _db;
}

exports.mongoConnect=mongoConnect;
exports.getDB=getDB;