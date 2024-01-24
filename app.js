const express = require('express');
const app=express();

const userRouter = require('./api/user/router');

app.use('/users', userRouter);

app.listen(3001, ()=>{
    console.log('Listen 3001')
})
