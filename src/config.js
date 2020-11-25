import dotenv from 'dotenv';
import Client from 'pg';

// const {dotenv} = require('dotenv');
// const Client = require('pg');


dotenv.config();

export const client = new Client.Pool({
    user : process.env.USER,
    password : process.env.PASSWORD, 
    host : process.env.HOST,
    port : process.env.PORT,
    database : process.env.DATABASE_URL
})