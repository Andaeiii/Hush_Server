import express from 'express';  //same-as,   "type": "module", - in package.json.. // const express = require('express') //old.
import bodyParser from 'body-parser';
import mongoose from 'mongoose';        //mongoDB model... 
import cors from 'cors';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//set up mongo db- cloud... 

const CONNECTION_URL = 'mongodb+srv://administrator:admin@password123@cluster0.mfe82.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));


mongoose.set('useFindAndModify', false); //no warnings in the console... 