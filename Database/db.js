const mongodb = require('mongodb'); //import mongodb
const mongo_client = mongodb.MongoClient;  // calling mongoclient


let db_url = "mongodb+srv://sudeep321:asdf4545@cluster0.6d2zj.mongodb.net/Products?retryWrites=true&w=majority";
let _db;

const mongoConnect = (callback) => {
    mongo_client.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(clientValue => {
            console.log(clientValue, "database connected");
            _db = clientValue.db('products');
            callback();

        })

        .catch(err => {
            console.log("connection error ", err)
        })
}

const getDb = () => {
    if (_db) {
        return _db;
    }
    else {
        console.log("database not found")
    }
}
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;