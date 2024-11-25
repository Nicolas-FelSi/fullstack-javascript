import express from "express";

const posts = [
    { id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150" },
    { id: 2, descricao: "Gato fazendo Yoga", imagem: "https://placecats.com/millie/300/150" },
    { id: 3, descricao: "Gato fazendo panqueca", imagem: "https://placecats.com/millie/300/150" },
];

function buscaPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
};

const app = express();
app.use(express.json());

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

app.get("/posts/:id", (req, res) => {
    const index = buscaPorId(req.params.id);
    res.status(200).json(posts[index]);
})

app.listen(3000, () => {
    console.log("Servidor rodando!");
});