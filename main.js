import express from 'express';
import path from 'path';
import pg from 'pg';

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "world",
    password: "Postgres@1234",
    port: 5432,
});
db.connect();

const app = express();
const port = 5000;

app.use(express.static(path.resolve("./views")));

app.get('/', (req, res) => {
    return res.sendFile("/views/index.html");
});

app.post("/", async (req, res) => {
    const winner = document.getElementById('result').innerText;
    await db.query("insert into win_percentage (winner_name) values ($1)", [winner]);
    res.end();
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});