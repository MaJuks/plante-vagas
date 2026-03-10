import { useNavigate } from "react-router";
import { Search, TrendingUp, Users, Briefcase, ArrowRight, Leaf, Building2, GraduationCap } from "lucide-react";
import bgImage from "../../../assets/images/bg-teste.jpg";
import bgImage2 from "../../../assets/images/plantacao2.jpeg";
import bgImage3 from "../../../assets/images/teste2.jpg";

export default function Main() {
  const navigate = useNavigate();

  const stats = [
    { icon: Users, value: "28.1M+", label: "Profissionais no Agro" },
    { icon: TrendingUp, value: "R$ 10.9T", label: "PIB Nacional" },
    { icon: Briefcase, value: "2.9%", label: "Crescimento em 2023" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] sm:min-h-[85vh] flex flex-col justify-center items-center pt-24 pb-16">
        {/* Background with Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 bg-deepGreen/10 text-deepGreen px-4 py-2 rounded-full text-sm font-SecondFont font-medium mb-6">
              <Leaf size={16} />
              Plataforma de Vagas do Agronegócio
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-deepGreen font-PrimaryFont leading-tight">
              Encontre a vaga
              <span className="block text-mediumGreen">perfeita para você</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mt-6 max-w-2xl mx-auto font-SecondFont">
              Conectamos talentos às melhores oportunidades do agronegócio brasileiro
            </p>
          </div>

          {/* Search Card */}
          <div className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <Search size={20} className="text-mediumGreen" />
              <label className="text-gray-800 font-medium text-lg font-SecondFont">
                Buscar vagas
              </label>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Cargo, empresa ou palavra-chave..."
                  className="w-full p-4 pl-5 bg-gray-50 border border-gray-200 rounded-xl
                           focus:outline-none focus:ring-2 focus:ring-mediumGreen focus:border-transparent
                           transition-all duration-300 font-SecondFont text-gray-700"
                />
              </div>
              <button
                onClick={() => navigate("/pesquisa-de-vagas")}
                className="group flex items-center justify-center gap-2 bg-deepGreen text-white px-8 py-4 rounded-xl
                         hover:bg-mediumGreen transition-all duration-300 font-SecondFont font-semibold
                         hover:shadow-lg hover:shadow-deepGreen/30 hover:scale-[1.02]"
              >
                PESQUISAR
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-sm text-gray-500 font-SecondFont">Populares:</span>
              {["Agrônomo", "Técnico Agrícola", "Operador de Máquinas", "Veterinário"].map((term) => (
                <button
                  key={term}
                  className="text-sm text-mediumGreen hover:text-deepGreen hover:bg-paleGreen
                           px-3 py-1 rounded-full transition-all duration-200 font-SecondFont"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-white to-paleGreen/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl
                         transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-paleGreen rounded-xl flex items-center justify-center
                                group-hover:bg-mediumGreen transition-colors duration-300">
                    <stat.icon size={28} className="text-deepGreen group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-deepGreen font-PrimaryFont">{stat.value}</div>
                    <div className="text-gray-600 font-SecondFont text-sm">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-paleGreen text-deepGreen px-4 py-2 rounded-full text-sm font-SecondFont font-medium mb-4">
                <TrendingUp size={16} />
                Setor em crescimento
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-deepGreen font-PrimaryFont mb-6">
                Sobre o Agronegócio
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-SecondFont mb-6">
                O número de pessoas trabalhando no agronegócio brasileiro ultrapassou
                <strong className="text-deepGreen"> 28,1 milhões</strong> pela primeira vez desde 2012.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-SecondFont mb-8">
                O Produto Interno Bruto (PIB) do Brasil fechou 2023 com alta de
                <strong className="text-deepGreen"> 2,9%</strong>, totalizando
                <strong className="text-deepGreen"> R$ 10,9 trilhões</strong>. O setor de serviços
                cresceu 2,4% e a indústria 1,6%.
              </p>
              <button
                onClick={() => navigate("/pesquisa-de-vagas")}
                className="group inline-flex items-center gap-2 text-deepGreen font-SecondFont font-semibold
                         hover:text-mediumGreen transition-colors duration-300"
              >
                Ver todas as vagas
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-paleGreen rounded-full opacity-50" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-softGreen rounded-full opacity-30" />
              <div className="relative bg-gradient-to-br from-deepGreen to-mediumGreen rounded-2xl p-8 text-white">
                <Leaf size={48} className="mb-4 opacity-80" />
                <h3 className="text-2xl font-bold font-PrimaryFont mb-3">O Futuro é Agro</h3>
                <p className="font-SecondFont opacity-90">
                  O agronegócio brasileiro é referência mundial em produtividade e sustentabilidade,
                  oferecendo milhares de oportunidades de carreira.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Companies */}
      <section id="servico" className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${bgImage2})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-deepGreen/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
            <Building2 size={32} className="text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-PrimaryFont mb-6">
            Alcance seu público-alvo e contrate o funcionário perfeito
          </h2>
          <p className="text-lg sm:text-xl text-white/90 font-SecondFont mb-8 max-w-2xl mx-auto">
            Tenha acesso a um processo seletivo sob medida para sua empresa e selecione o candidato ideal
            para o agronegócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/cadastro-empresa")}
              className="group inline-flex items-center justify-center gap-2 bg-white text-deepGreen
                       px-8 py-4 rounded-xl font-SecondFont font-semibold
                       hover:bg-paleGreen transition-all duration-300 hover:scale-105"
            >
              CADASTRAR EMPRESA
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white
                       px-8 py-4 rounded-xl font-SecondFont font-semibold
                       hover:bg-white/10 transition-all duration-300"
            >
              CONHECER PLANOS
            </button>
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgImage3})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-paleGreen rounded-2xl mb-6">
              <GraduationCap size={32} className="text-deepGreen" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-deepGreen font-PrimaryFont mb-6">
              Formando os futuros líderes do agro
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 font-SecondFont mb-4">
              Encontre o estágio ideal para iniciar sua carreira no agronegócio.
            </p>
            <p className="text-xl sm:text-2xl text-mediumGreen font-PrimaryFont italic mb-8">
              "Plante iniciativas e colha resultados."
            </p>
            <button
              onClick={() => navigate("/pesquisa-de-vagas")}
              className="group inline-flex items-center gap-2 bg-deepGreen text-white px-8 py-4 rounded-xl
                       font-SecondFont font-semibold hover:bg-mediumGreen transition-all duration-300
                       hover:shadow-lg hover:shadow-deepGreen/30 hover:scale-105"
            >
              PROCURAR ESTÁGIOS
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
