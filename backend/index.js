import express, { json } from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

const db_config = {
    host:"remotemysql.com",
    user:"yGqYcXYDYF",
    password:"hM4DzrXaWa",
    database:"yGqYcXYDYF"
}

let db = mysql.createConnection(db_config)

// store the data locally because the db keep losing connecting after a period of time
// I tried to fix it but the db said that I don't have the permission to do so
let info
let studio

db.query("SELECT * FROM yGqYcXYDYF.info", (err, data) => {
    info = data
})

db.query("SELECT * FROM yGqYcXYDYF.studio", (err, data) => {
    studio = data
})

db.end()

app.get("/", (req, res) => {
    return res.json(info)
})

app.get("/info/:title", (req, res) => {
    const anime = info.filter(data => data.title.toLowerCase().includes(req.params.title.toLowerCase()))
    return res.json(anime)
})

app.get("/studio/:studio", (req, res) => {
    const stu = studio.filter(data => data.name.toLowerCase().includes(req.params.studio.toLowerCase()))
    return res.json(stu)
})

app.post("/feedback", (req, res) => {
    db = mysql.createConnection(db_config)
    db.query("INSERT INTO user_feedback (feedback) VALUES (?)", req.body.feedback)
    db.end()
})

app.listen(8800, () => {
    console.log("Connnected to Backend!")
})