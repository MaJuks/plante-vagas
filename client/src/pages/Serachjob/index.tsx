import Footer from "@/components/home-page/footer/footer";
import Header from "@/components/home-page/headers/header";
import FilterBar from "@/components/searchJob/filterBar/filterBar";
import Vagas from "@/components/searchJob/jobs/vagas";
import { Briefcase, ChevronDown, Loader2 } from "lucide-react";

const SearchJobs = () => {
  // Mock data - em produção viria da API
  const vagasData = [
    {
      name: "AUXILIAR COMERCIAL",
      cidade: "Cascavel - PR",
      postada: "2",
      pcd: true,
      regime: "Presencial",
      contratacao: "CLT",
      salario: "R$ 2.500",
      descricao: "Buscamos um(a) Auxiliar Comercial para atuar no setor de agronegócio, prestando suporte às atividades de vendas e atendimento ao cliente.",
      imagem: null,
    },
    {
      name: "ENGENHEIRO AGRÔNOMO",
      cidade: "Toledo - PR",
      postada: "5",
      pcd: false,
      regime: "Híbrido",
      contratacao: "CLT",
      salario: "R$ 8.000",
      descricao: "Responsável pelo planejamento e acompanhamento de lavouras, análise de solo, recomendação de insumos e orientação técnica aos produtores.",
      imagem: null,
    },
    {
      name: "TÉCNICO AGRÍCOLA",
      cidade: "Maringá - PR",
      postada: "12",
      pcd: false,
      regime: "Presencial",
      contratacao: "CLT",
      salario: "R$ 3.500",
      descricao: "Atuação em campo com acompanhamento de culturas, coleta de amostras, monitoramento de pragas e doenças, e suporte técnico aos agricultores.",
      imagem: null,
    },
    {
      name: "OPERADOR DE MÁQUINAS AGRÍCOLAS",
      cidade: "Palotina - PR",
      postada: "24",
      pcd: false,
      regime: "Presencial",
      contratacao: "CLT",
      salario: "R$ 4.200",
      descricao: "Operação de tratores, colheitadeiras e implementos agrícolas. Experiência com agricultura de precisão será um diferencial.",
      imagem: null,
    },
  ];

  return (
    <>
      <Header />

      <main className="pt-20 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-deepGreen to-mediumGreen py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-SecondFont font-medium mb-4">
              <Briefcase size={16} />
              {vagasData.length} vagas encontradas
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-PrimaryFont mb-4">
              Encontre sua vaga ideal
            </h1>
            <p className="text-white/80 font-SecondFont text-lg max-w-2xl mx-auto">
              Explore as melhores oportunidades do agronegócio e dê o próximo passo na sua carreira
            </p>
          </div>
        </div>

        {/* Filter Section */}
        <FilterBar />

        {/* Results Section */}
        <section className="py-8 sm:py-12 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-deepGreen font-PrimaryFont">
                  Vagas disponíveis
                </h2>
                <p className="text-gray-600 font-SecondFont mt-1">
                  Mostrando {vagasData.length} resultados
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600 font-SecondFont text-sm">Ordenar por:</span>
                <select className="bg-white border border-gray-200 rounded-lg px-4 py-2 font-SecondFont text-sm
                                 focus:outline-none focus:ring-2 focus:ring-mediumGreen">
                  <option>Mais recentes</option>
                  <option>Maior salário</option>
                  <option>Menor salário</option>
                  <option>Mais relevantes</option>
                </select>
              </div>
            </div>

            {/* Jobs List */}
            <div className="space-y-6">
              {vagasData.map((vaga, index) => (
                <Vagas
                  key={index}
                  name={vaga.name}
                  cidade={vaga.cidade}
                  postada={vaga.postada}
                  pcd={vaga.pcd}
                  regime={vaga.regime}
                  contratacao={vaga.contratacao}
                  salario={vaga.salario}
                  descricao={vaga.descricao}
                  imagem={vaga.imagem}
                />
              ))}
            </div>

            {/* Load More Button */}
            <div className="flex justify-center mt-12">
              <button
                className="group flex items-center gap-3 bg-white border-2 border-deepGreen text-deepGreen
                         px-8 py-4 rounded-xl font-SecondFont font-semibold
                         hover:bg-deepGreen hover:text-white transition-all duration-300
                         hover:shadow-lg"
              >
                <span>VER MAIS VAGAS</span>
                <ChevronDown size={20} className="transition-transform group-hover:translate-y-1" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SearchJobs;
