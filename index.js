// import json server library
const jsonServer = require("json-server")

//create server 
const libraryManagementServer = jsonServer.create()

// create path for database.json, connecting index.js to database.json
const router = jsonServer.router("database.json")

//create a middleware to convert json to js
const middleware = jsonServer.defaults()

//use router and middleware by the libraryManagementServer
libraryManagementServer.use(middleware)
libraryManagementServer.use(router)

//set a port for the server
const port = 4000 || process.env.PORT 

//run the server
libraryManagementServer.listen(port,()=>{
    console.log(`libraryManagementServer running successfully in port ${port}`);
})