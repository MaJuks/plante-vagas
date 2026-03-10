import CandidatesDisplay from "./candidatesDisplay";

export default function MainCandidates() {
  type Candidato = {
    id: number;
    nome: string;
    cidade: string;
    estado: string;
    imagem: string;
    competencias: string[];
    descricao: string;
  };

  const candidatos: Candidato[] = [
    {
      id: 1,
      nome: "Ana Souza",
      cidade: "São Paulo",
      estado: "SP",
      imagem: "https://randomuser.me/api/portraits/women/44.jpg",
      competencias: ["React", "TypeScript", "Figma", "Scrum"],
      descricao:
        "Desenvolvedora frontend apaixonada por criar interfaces intuitivas e acessíveis. Atua com React e TypeScript, sempre buscando aplicar boas práticas de design de interface e experiência do usuário. Tem experiência em trabalho colaborativo com squads ágeis, utilizando metodologias como Scrum e ferramentas de prototipação como o Figma para garantir entregas consistentes e centradas no usuário.",
    },
    {
      id: 2,
      nome: "Carlos Mendes",
      cidade: "Belo Horizonte",
      estado: "MG",
      imagem: "https://randomuser.me/api/portraits/men/32.jpg",
      competencias: ["Node.js", "Python", "Docker", "PostgreSQL"],
      descricao:
        "Engenheiro de software com foco em backend e infraestrutura escalável. Possui experiência sólida com desenvolvimento de APIs REST em Node.js e Python, além de integração com bancos de dados relacionais como PostgreSQL. Também domina tecnologias de containerização com Docker, contribuindo para a automação de ambientes e o desempenho de aplicações em produção. Gosta de enfrentar desafios técnicos e buscar soluções robustas.",
    },
    {
      id: 3,
      nome: "Juliana Lima",
      cidade: "Curitiba",
      estado: "PR",
      imagem: "https://randomuser.me/api/portraits/women/68.jpg",
      competencias: ["UX/UI", "HTML", "CSS", "Adobe XD"],
      descricao:
        "Especialista em experiência do usuário, com foco em design centrado no ser humano. Trabalha na criação de fluxos e interfaces funcionais e visualmente atrativas, com forte domínio de ferramentas como Adobe XD e sólidos conhecimentos de HTML e CSS. Tem facilidade em transformar problemas complexos em soluções simples e eficazes, sempre buscando compreender as necessidades do usuário final e promover experiências digitais significativas.",
    },
  ];

  return (
    <>
      <div className="bg-paleGreen mt-20 font-SecondFont px-4 sm:px-14 md:px-20 lg:px-14 xl:px-[55px] py-6 sm:py-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
          <h1 className="text-xl sm:text-2xl">Candidatos a vaga</h1>
          <select
            name=""
            id=""
            className="bg-oliveGreen text-white px-3 py-2 rounded-md cursor-pointer"
          >
            <option value="recentes">Mais recentes</option>
            <option value="antigos">Mais antigos</option>
            <option value="relevantes">Mais relevantes</option>
            <option value="nome_asc">Nome (A-Z)</option>
            <option value="nome_desc">Nome (Z-A)</option>
          </select>
        </div>

        <div className="px-0 sm:px-10 md:px-20 lg:px-16 xl:px-[70px] py-8 sm:py-20">
          <CandidatesDisplay candidates={candidatos} />
        </div>
      </div>
    </>
  );
}
