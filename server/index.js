import express, { json } from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"D@tabas3*S&T",
    database:"anime"
});

app.use(express.json());
app.use(cors());

app.get("/info", (rep, res) => {
    const q = "SELECT * FROM anime.info";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.listen(8800, () => {
    console.log("Connnected to Backend!");
});