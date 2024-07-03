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
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    return res.render("/views/index.html");
});

app.get('/', async (req, res) => {
    const winner = page.getElementById('result').innerText;
    console.log(winner);
    try{
        await db.query("insert into win_percentage (winner_name) values ($1)", [winner]);
    } catch(err){
        console.log(err);
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});