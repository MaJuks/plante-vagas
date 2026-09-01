import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router";
import Footer from "@/components/home-page/footer/footer";
import Header from "@/components/home-page/headers/header";
import FilterBar from "@/components/searchJob/filterBar/filterBar";
import Vagas from "@/components/searchJob/jobs/vagas";
import { getAllVagas, type Vaga } from "@/services/vaga";
import { Briefcase, Loader2 } from "lucide-react";

const ORDENACOES = [
  { value: "recentes", label: "Mais recentes" },
  { value: "salario-maior", label: "Maior salário" },
  { value: "salario-menor", label: "Menor salário" },
] as const;

const SearchJobs = () => {
  const [searchParams] = useSearchParams();
  const [vagas, setVagas] = useState<Vaga[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);
  const [busca, setBusca] = useState(searchParams.get("busca") ?? "");
  const [ordenacao, setOrdenacao] = useState<(typeof ORDENACOES)[number]["value"]>("recentes");

  useEffect(() => {
    getAllVagas()
      .then(setVagas)
      .catch((e) => setErro(e.message || "Erro ao buscar vagas"))
      .finally(() => setLoading(false));
  }, []);

  const vagasExibidas = useMemo(() => {
    const buscaLower = busca.trim().toLowerCase();
    const filtradas = vagas.filter((v) => {
      if (!buscaLower) return true;
      return (
        v.nome.toLowerCase().includes(buscaLower) ||
        v.cargo.toLowerCase().includes(buscaLower) ||
        v.empresa?.fantasyName?.toLowerCase().includes(buscaLower) ||
        v.empresa?.name?.toLowerCase().includes(buscaLower)
      );
    });

    return [...filtradas].sort((a, b) => {
      switch (ordenacao) {
        case "salario-maior":
          return (b.salario ?? 0) - (a.salario ?? 0);
        case "salario-menor":
          return (a.salario ?? Infinity) - (b.salario ?? Infinity);
        case "recentes":
        default:
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });
  }, [vagas, busca, ordenacao]);

  return (
    <>
      <Header />

      <main className="pt-20 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-deepGreen to-mediumGreen py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-SecondFont font-medium mb-4">
              <Briefcase size={16} />
              {vagasExibidas.length} vaga{vagasExibidas.length !== 1 ? "s" : ""} encontrada{vagasExibidas.length !== 1 ? "s" : ""}
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
        <FilterBar busca={busca} onBuscaChange={setBusca} />

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
                  Mostrando {vagasExibidas.length} resultados
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600 font-SecondFont text-sm">Ordenar por:</span>
                <select
                  value={ordenacao}
                  onChange={(e) => setOrdenacao(e.target.value as typeof ordenacao)}
                  className="bg-white border border-gray-200 rounded-lg px-4 py-2 font-SecondFont text-sm
                                 focus:outline-none focus:ring-2 focus:ring-mediumGreen"
                >
                  {ORDENACOES.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="flex flex-col items-center justify-center py-20 text-gray-500 font-SecondFont">
                <Loader2 size={32} className="animate-spin text-mediumGreen mb-3" />
                Carregando vagas...
              </div>
            )}

            {/* Error State */}
            {!loading && erro && (
              <div className="text-center py-20 text-red-600 font-SecondFont">{erro}</div>
            )}

            {/* Empty State */}
            {!loading && !erro && vagas.length === 0 && (
              <div className="text-center py-20 text-gray-500 font-SecondFont">
                Nenhuma vaga disponível no momento.
              </div>
            )}

            {!loading && !erro && vagas.length > 0 && vagasExibidas.length === 0 && (
              <div className="text-center py-20 text-gray-500 font-SecondFont">
                Nenhuma vaga encontrada pra essa busca.
              </div>
            )}

            {/* Jobs List */}
            {!loading && !erro && vagasExibidas.length > 0 && (
              <div className="space-y-6">
                {vagasExibidas.map((vaga) => (
                  <Vagas
                    key={vaga.id}
                    id={vaga.id}
                    nome={vaga.nome}
                    cargo={vaga.cargo}
                    salario={vaga.salario}
                    descricao={vaga.descricao}
                    beneficios={vaga.beneficios}
                    empresa={vaga.empresa}
                    createdAt={vaga.createdAt}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SearchJobs;
