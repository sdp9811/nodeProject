const mongodb = require('mongodb');
const getDb = require('../Database/db').getDb; //it returns the database

module.exports = class Product {
    //form value(object)
    constructor(pid, pname, price) {
        this.prodId = pid;
        this.prodName = pname;
        this.prodPrice = price
    }
    saveData() {
        const db = getDb();
        let dbOperation = db.collection('product_data').insertOne(this)
        return dbOperation.then(results => {
            console.log("Data inserted", results);

        }).catch(err => {
            console.log("data is not inserted", err);
        })
    }




    static fetchProductData() {
        const db = getDb();
        return db.collection('product_data').find().toArray().then(products => {
            return products;
        }).catch(err => {
            console.log(err);
        })
    }
}
// find returns entire data. does not return any promise, so hav to convert the string in array by toarray