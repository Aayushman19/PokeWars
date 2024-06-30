async function updateDB(){
    const pg = require("pg");
    const db = new pg.Client({
        user : "postgres",
        password : "Postgres@1234",
        host : "localhost",
        database : "world",
        port : 5432
    });

    db.connect();

    const winner = document.getElementById("result").innerText;

    await db.query("insert into win_percentage (winner_name) values ($1)", [winner]);
}