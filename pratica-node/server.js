// import { createServer } from 'node:http'

// const server = createServer((req, res) => {
//     res.write("Servidor rodando");
//     res.end();
// })

// server.listen(3333);

import { fastify } from "fastify"

const server = fastify();

server.listen({
    port: 3333
})