import { db } from './firebaseConnection'

function App() {
  return (
    <div className="App">
      <h1>ReactJS + Firebase</h1>
      <form>
        <div>
          <label htmlFor="titleId">Título: </label>
          <input type="text" id='titleId' placeholder='Digite o título do post' />
        </div>
      </form>
    </div>
  );
}

export default App;
