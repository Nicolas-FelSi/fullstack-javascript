import express from "express";

const app = express();

app.get("/api", (req, res) => {
    res.send("Resposta aqui");
})

app.listen(3000, () => {
    console.log("Servidor rodando!");
})