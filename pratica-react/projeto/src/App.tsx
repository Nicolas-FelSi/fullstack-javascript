import { useState } from "react"

function App() {
  const [inputNome, setInputNome] = useState("");
  const [aluno, setAluno] = useState("");

  function mostrarAluno() {
    setAluno(inputNome);
  }

  return (
    <>
      <input 
        type="text" 
        placeholder="nome"
        value={inputNome}
        onChange={(e) => setInputNome(e.target.value)}
      />
      <button onClick={mostrarAluno}>Mostrar aluno</button>

      <h2>Bem-vindo {aluno}</h2>
    </>
  )
}

export default App
