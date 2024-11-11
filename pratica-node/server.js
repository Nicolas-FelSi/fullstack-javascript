// import { createServer } from 'node:http'

// const server = createServer((req, res) => {
//     res.write("Servidor rodando");
//     res.end();
// })

// server.listen(3333);

import { fastify } from "fastify";
import DataBaseMemory from "./database-memory.js";

const server = fastify();
const database = new DataBaseMemory();

server.get("/videos", () => {
    database.list();
    return "Página principal";
})

server.post("/videos", () => {
    return "Página sobre";
})

server.put("/videos/:id", () => {
    return "Página contatos";
})

server.delete("/videos/:id", () => {
    return "Página não encontrada 404"
})

server.get("*", () => {
    return "Página não encontrada 404"
})

server.listen({
    port: 3333
})