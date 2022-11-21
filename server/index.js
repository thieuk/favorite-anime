import express from 'express';
import mysql from 'mysql';

const app = express();

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"D@tabas3*S&T",
    database:"anime"
});

app.listen(8800, () => {
    console.log("Connnected to Backend!");
});