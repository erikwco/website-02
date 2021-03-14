import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'/brand.png'} className="App-logo" alt="logo" />
        <p>Sitio Web 02</p>
        <p>
          Nombre: Erik William Chacón Osorio.
        </p>
        <p>Carnet: 29-0688-1999</p>
        <p>Materia: Redes II</p>
        <a
          className="App-link"
          href="https://utec.edu.sv"
          target="_blank"
          rel="noopener noreferrer"
        >
          Universidad Tecnológica
        </a>
      </header>
    </div>
  );
}

export default App;
