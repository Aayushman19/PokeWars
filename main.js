import express from 'express';
import path from 'path';
import { dirname } from 'path';

const app = express();
const port = 5000;

app.use(express.static(path.resolve("./views")));

app.get('/', (req, res) =>{
    return res.sendFile("/views/index.html");
});

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});