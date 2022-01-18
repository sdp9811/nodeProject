const express = require('express');
const appServer = express();
const path = require('path');
appServer.use(express.urlencoded());
const adm_router = require('./Router/adminRoute');
const shp_router=require('./Router/shopRoute');
const mongoConnect=require('./Database/db').mongoConnect;
appServer.set('view engine', 'ejs');
appServer.set('Views', 'Views');
appServer.use(express.static(path.join(__dirname, 'Public')))
appServer.use(adm_router);
appServer.use(shp_router);

mongoConnect(()=>{
    appServer.listen(5555,()=>{
        console.log("server is connected localhost:5555")
    })
})