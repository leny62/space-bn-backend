import express from 'express';
import mongoose from 'mongoose';
import config from './src/config/config';
import { json, urlencoded } from 'body-parser';

const app = express();

const CONNECTION_URL = config.ENV !== 'test' ? config.CONNECTION_URL12: config.CONNECTION_URL;
console.log(CONNECTION_URL);
mongoose.connect(`${CONNECTION_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('connected to mongodb successfully....'))
.catch(err =>console.log('Failed to connect to mongodb!',err));

app.use(json());
app.use(urlencoded({extended: true}))


app.get('/',(req,res)=>{
    res.send("Welcome to my app").status(200)
});

export default app;