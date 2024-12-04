import express from "express";

const app = express();
app.use(express.json());

function buscarSelecaoPorId(id) {
    return selecoes.filter(selecao => selecao.id === Number(id));
}

function buscarSelecaoPorIndex(id) {
    return selecoes.findIndex(selecao => selecao.id === Number(id))
}

const selecoes = [
    { id: 1, selecao: 'Brasil', grupo: 'G' },
    { id: 2, selecao: 'Suíça', grupo: 'G' },
    { id: 3, selecao: 'Sérvia', grupo: 'G' },
    { id: 4, selecao: 'Camarões', grupo: 'G' }
]

app.post("/selecoes", (req, res) => {
    selecoes.push(req.body);
    res.status(201).send("Seleção cadastrada com sucesso!");
})

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/selecoes", (req, res) => {
    res.status(200).send(selecoes);
})

app.get("/selecoes/:id", (req, res) => {
    res.status(200).json(buscarSelecaoPorId(req.params.id));
})

app.put("/selecoes/:id", (req, res) => {
    const index = buscarSelecaoPorIndex(req.params.id);
    selecoes[index].selecao = req.body.selecao;
    selecoes[index].grupo = req.body.grupo;
    res.json(selecoes);
})

app.delete("/selecoes/:id", (req, res) => {
    const index = buscarSelecaoPorIndex(req.params.id);
    selecoes.splice(index, 1);

    res.status(200).send("Seleção deletada com sucesso");
})

export default app;