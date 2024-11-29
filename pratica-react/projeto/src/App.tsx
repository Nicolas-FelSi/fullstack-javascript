import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <h1>Alunos</h1>
      <Aluno nome="Nicolas" idade={22}/>
      <Aluno nome="Roberto" idade={43}></Aluno>
    </>
  )
}

interface AlunoProps {
  nome: string;
  idade: number;
}

function Aluno({nome, idade}: AlunoProps) {
  return (
    <>
      <h1>Nome: {nome}</h1>
      <h2>Idade: {idade}</h2>
    </>
  )
}

export default App
