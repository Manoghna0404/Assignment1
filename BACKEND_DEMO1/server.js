// create HTTP server
// import express module

import exp from 'express';
import {userApp} from './APIs/userAPI.js';
import {productApp} from './APIs/productAPI.js';
// create server
const app=exp();
// Assign port number
app.listen(3000,()=>console.log("http server listening on port 3000"));

// body parsing middlewares
app.use(exp.json());
app.use("/user-api",userApp);
app.use("/product-api",productApp);
// create a custom middleware
// app.use(middleware1);
// create API( req handlers - route)


// address of http server
// http://127.0.0.1:3000/path
// http://localhost:3000

