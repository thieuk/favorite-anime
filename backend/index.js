import express, { application, json } from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

const db_config = {
    host: "localhost",
    user: "root",
    password: "",
    database: "anime"
}

let db = mysql.createConnection(db_config)

// store the data locally because the db kept losing connecting after a period of time
let info
let studio

db.query("SELECT * FROM anime.info", (err, data) => {
    info = data
})

db.query("SELECT * FROM anime.studio", (err, data) => {
    studio = data
})

db.end()

app.get("/", (req, res) => {
    const apiInstruction = `
        <h2>How to fetch data using API:</h2>
        <p>http://localhost:8800/api/info --> fetch all information in the "info" table</p>
        <p>http://localhost:8800/api/info/:title --> fetch a specific row in the "info" table</p>
        <p>http://localhost:8800/api/studio --> fetch all information in the "studio" table</p>
        <p>http://localhost:8800/api/studio/:name --> fetch a specific row in the "studio" table</p>
    `
    res.send(apiInstruction)
})

app.get("/api/info", (req, res) => {
    res.send(info)
})

app.get("/api/info/:title", (req, res) => {
    const anime = info.filter(data => data.title.toLowerCase() === req.params.title.toLowerCase())
    res.send(anime)
})

app.get("/api/studio", (req, res) => {
    res.send(studio)
})

app.get("/api/studio/:studio", (req, res) => {
    const stu = studio.filter(data => data.name.toLowerCase() === req.params.studio.toLowerCase())
    res.send(stu)
})

app.post("/api/feedback", (req, res) => {
    db = mysql.createConnection(db_config)
    db.query("INSERT INTO user_feedback (feedback) VALUES (?)", req.body.feedback)
    db.end()
})

app.listen(8800, () => {
    console.log("Connnected to Backend!")
})