const projetos = [
  {
    titulo: "Sistema de Protocolo",
    descricao: "Controle de documentos",
    imagem: "/protocolo.jpg"
  },
  {
    titulo: "Atendimento",
    descricao: "Organização de atendimentos",
    imagem: "/atendimento.jpg"
  },
  {
    titulo: "Painel de Gestão",
    descricao: "Acompanhamento de dados",
    imagem: "/painel.jpg"
  }
];

export default function Projetos() {
  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>

      <div className="cards">
        {projetos.map((p, i) => (
          <div className="card" key={i}>
            <img src={p.imagem} />
            <h3>{p.titulo}</h3>
            <p>{p.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}