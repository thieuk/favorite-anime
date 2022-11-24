import express, { json } from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();

const db = mysql.createConnection({
    host:"sql9.freesqldatabase.com",
    user:"sql9580230",
    password:"sZLBxRiCru",
    database:"sql9580230"
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    const q = "SELECT * FROM sql9580230.info";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.get("/info/:title", (req, res) => {
    const q = `SELECT * FROM sql9580230.info WHERE title="${req.params.title}"`;
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.listen(8800, () => {
    console.log("Connnected to Backend!");
});