import { Clock, MapPin, Gift, PenTool, DollarSign, Users } from "lucide-react";

const JobInformation = () => {
  {
    /* Constante que armazena as informações da vaga */
  }
  const jobDetails = [
    { icon: <Clock size={20} />, label: "Postada há 72 horas" },
    { icon: <MapPin size={20} />, label: "Cascavel - PR" },
    { icon: <Gift size={20} />, label: "Presencial" },
    { icon: <PenTool size={20} />, label: "CLT" },
    { icon: <DollarSign size={20} />, label: "Não informado" },
    { icon: <Users size={20} />, label: "PCD" },
  ];

  {
    /* Constante que armazena a descrição da vaga  */
  }
  const Description = {
    id: 1,
    description: `Estamos em busca de um(a) Auxiliar Comercial para atuar no setor de agronegócio, prestando suporte às atividades de vendas e atendimento ao cliente.
  
Este(a) profissional terá um papel fundamental, sendo responsável por gerenciar cadastros de clientes, assegurando que as informações estejam sempre atualizadas e acessíveis para a equipe de vendas.

Além disso, ele(a) irá auxiliar no preparo de propostas comerciais, entendendo as demandas dos clientes e organizando os dados de produtos e preços de forma clara e atraente.

O(A) Auxiliar Comercial também dará suporte logístico nas operações de entrega, trabalhando em conjunto com a equipe de logística para garantir a eficiência nas entregas.`,
  };

  {
    /*Constante para sliptar em paragrafos  */
  }

  const jobDescription = Description.description
    .split("\n") // Divide por quebras de linha
    .filter((paragraph) => paragraph.trim() !== "");

  {
    /* Constante que armazena os requisitos da vaga */
  }
  const RequirementsList = [
    { icon: "•", label: "Comunicação Eficaz" },
    { icon: "•", label: "Organização" },
    { icon: "•", label: "Atenção aos Detalhes" },
    { icon: "•", label: "Conhecimento em Vendas" },
    { icon: "•", label: "Habilidades de Atendimento ao Cliente" },
    { icon: "•", label: "Trabalho em Equipe" },
    { icon: "•", label: "Adaptabilidade" },
    { icon: "•", label: "Conhecimento de Informática" },
    { icon: "•", label: "Resolução de Problemas" },
    { icon: "•", label: "Iniciativa" },
    { icon: "•", label: "Conhecimento do Setor de Agronegócio" },
    { icon: "•", label: "Habilidades de Negociação" },
  ];
  return (
    <>
      {/* Sessão que apresenta a tabela com os requisitos da vaga */}
      <section>
        <div className=" rounded-lg shadow-md p-4 w-full  mx-full font-SecondFont w-full mt-2 mb-4">
          {jobDetails.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border border-black  p-2"
            >
              <div className="flex items-center gap-2">{item.icon}</div>
              <span className=" font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </section>
      {/* Fim da sessão  */}

      <br />

      {/* Sessão que apresenta a descrição da vaga  */}
      <section>
        <div className="text-oliveGreen">
          {jobDescription.map((paragraph, index) => (
            <p
              key={index}
              className="font-SecondFont leading-relaxed tracking-wide mt-4"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>
      {/* Fim da sessão  */}

      <br />

      {/* Sessão que apresenta os requisitos para a vaga   */}
      <section>
        <p className="text-deepGreen font-PrimaryFont text-lg sm:text-lg md:text-xl">
          REQUISITOS E QUALIFICAÇÕES
        </p>
        <div className="max-w-[1000px] mx-auto flex justify-between items-start">
          <div className="relative">
            {RequirementsList.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 font-SecondFont "
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <button className="bg-deepGreen text-white px-4 py-2 rounded-md shadow hover:bg-green-700 md:w-auto self-start mt-64		">
            CANDIDATAR-SE
          </button>
        </div>
      </section>

      {/* Fim da sessão  */}
    </>
  );
};

export default JobInformation;
