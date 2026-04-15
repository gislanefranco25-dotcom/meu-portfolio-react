import Projetos from "./components/Projetos";
import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <h1>Gislane Franco</h1>
      </header>

      <section className="hero">
        <img src="/perfil2.jpg" className="foto" />

        <h2>Secretária de Governo</h2>

        <p>
          Experiência em gestão administrativa, atendimento institucional e organização de processos públicos.
        </p>

        <a href="#projetos" className="botao">Ver Projetos</a>
      </section>

      <section className="sobre">
        <h2>Sobre mim</h2>
        <p>
          Sou profissional da área pública com experiência em gestão administrativa...
        </p>
      </section>

      <Projetos />
    </>
  );
}

export default App;