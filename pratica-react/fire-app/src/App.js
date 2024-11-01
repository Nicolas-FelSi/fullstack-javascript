import { collection, addDoc } from 'firebase/firestore'
import { useState } from 'react'
import db from 


function App() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  async function handleRegister(e) {
    e.preventDefault();
    
    await addDoc(collection(db, 'posts', {
      titulo: title,
      autor: author
    }))
  }

  return (
    <div className="App">
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="titleId">Título: </label>
          <input type="text" placeholder="Informe um título"/>
        </div>
        <div>
          <label htmlFor="authorId">Autor: </label>
          <input type="text" placeholder="Informe um autor"/>
        </div>
        <button>Cadastrar</button>
      </form>
    </div>
  );
}

export default App;
