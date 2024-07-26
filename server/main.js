import express from 'express';
import path from 'path';
import pg from 'pg';
import http from 'http';
import { Server } from 'socket.io';

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "world",
    password: "Postgres@1234",
    port: 5432,
});
db.connect();

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port = 5000;

io.on("connection", (socket) => {
    socket.on("user-message", (message) => {
        io.emit("message", message);
    });
});

app.use(express.static(path.resolve("./views")));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>{
    res.render('index.html');
});

app.post('/', async (req, res) => {
    const winner = req.body.result;
    console.log(winner);
    await db.query("insert into win_percentage (winner_name) values ($1)", [winner]);
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});