import express from "express";
import path from "path";
import { fileURLToPath } from "node:url";

const filename = fileURLToPath(import.meta.url);
const folder = path.dirname(filename);
const app = express();
app.use(express.static(path.join(folder,"pages")));




app.use(express.static(path.join(folder,"pages")));

app.use((req, res) => {
    res.status(404).sendFile(path.join(folder,"pages","404.html"));

});

app.listen(5555, () => console.log("prg3 is running at 5555"));