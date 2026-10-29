import express from "express";
import path from "path";
import { fileURLToPath } from "node:url";   

const app = express();

app.use((req, res)=>{
    app.status(404)
})
app.get("/api/products", (req, res) => {
let sortedProducts = products.map({ name,image,price,id})=>
    name,
    image,
    price,
    id,
});
let sortProducts = products.map(
    ({ description, review,...rest})=>rest,
)};
app.get("/api/products/:productID", (req, res) => {
    
}

app.listen(5555, () => console.log("prg4 is running at 5555"));
    