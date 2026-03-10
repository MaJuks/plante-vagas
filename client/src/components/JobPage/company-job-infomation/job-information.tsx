import { Clock, MapPin, Monitor, FileText, DollarSign, UserCheck, CheckCircle2, Send, ArrowRight } from "lucide-react";

const JobInformation = () => {
  const jobDetails = [
    { icon: Clock, label: "Postada há 72 horas", color: "text-blue-600 bg-blue-50" },
    { icon: MapPin, label: "Cascavel - PR", color: "text-green-600 bg-green-50" },
    { icon: Monitor, label: "Presencial", color: "text-purple-600 bg-purple-50" },
    { icon: FileText, label: "CLT", color: "text-orange-600 bg-orange-50" },
    { icon: DollarSign, label: "A combinar", color: "text-emerald-600 bg-emerald-50" },
    { icon: UserCheck, label: "Vaga PCD", color: "text-cyan-600 bg-cyan-50" },
  ];

  const Description = {
    description: `Estamos em busca de um(a) Auxiliar Comercial para atuar no setor de agronegócio, prestando suporte às atividades de vendas e atendimento ao cliente.

Este(a) profissional terá um papel fundamental, sendo responsável por gerenciar cadastros de clientes, assegurando que as informações estejam sempre atualizadas e acessíveis para a equipe de vendas.

Além disso, ele(a) irá auxiliar no preparo de propostas comerciais, entendendo as demandas dos clientes e organizando os dados de produtos e preços de forma clara e atraente.

O(A) Auxiliar Comercial também dará suporte logístico nas operações de entrega, trabalhando em conjunto com a equipe de logística para garantir a eficiência nas entregas.`,
  };

  const jobDescription = Description.description
    .split("\n")
    .filter((paragraph) => paragraph.trim() !== "");

  const RequirementsList = [
    "Comunicação Eficaz",
    "Organização",
    "Atenção aos Detalhes",
    "Conhecimento em Vendas",
    "Habilidades de Atendimento ao Cliente",
    "Trabalho em Equipe",
    "Adaptabilidade",
    "Conhecimento de Informática",
    "Resolução de Problemas",
    "Iniciativa",
    "Conhecimento do Setor de Agronegócio",
    "Habilidades de Negociação",
  ];

  return (
    <div className="space-y-8">
      {/* Job Details Grid */}
      <section>
        <h3 className="text-lg font-bold text-deepGreen font-PrimaryFont mb-4">
          Informações da Vaga
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {jobDetails.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center p-4 rounded-xl ${item.color}
                        transition-transform duration-300 hover:scale-105`}
            >
              <item.icon size={24} className="mb-2" />
              <span className="text-sm font-SecondFont font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Description */}
      <section>
        <h3 className="text-lg font-bold text-deepGreen font-PrimaryFont mb-4">
          Descrição da Vaga
        </h3>
        <div className="bg-gray-50 rounded-xl p-6">
          {jobDescription.map((paragraph, index) => (
            <p
              key={index}
              className="font-SecondFont text-gray-700 leading-relaxed mb-4 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section>
        <h3 className="text-lg font-bold text-deepGreen font-PrimaryFont mb-4">
          Requisitos e Qualificações
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {RequirementsList.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 bg-paleGreen/30 rounded-xl
                       hover:bg-paleGreen/50 transition-colors duration-300"
            >
              <div className="w-6 h-6 bg-mediumGreen rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={14} className="text-white" />
              </div>
              <span className="font-SecondFont text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Apply Button */}
      <section className="pt-4">
        <div className="bg-gradient-to-r from-deepGreen to-mediumGreen rounded-2xl p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white font-PrimaryFont mb-2">
            Interessado nesta vaga?
          </h3>
          <p className="text-white/80 font-SecondFont mb-6">
            Candidate-se agora e dê o próximo passo na sua carreira
          </p>
          <button
            className="group inline-flex items-center gap-3 bg-white text-deepGreen px-8 py-4 rounded-xl
                     font-SecondFont font-bold text-lg hover:bg-paleGreen transition-all duration-300
                     hover:shadow-lg hover:scale-105"
          >
            <Send size={20} />
            CANDIDATAR-SE
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default JobInformation;
