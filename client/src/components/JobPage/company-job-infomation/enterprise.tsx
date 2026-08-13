import { Building2, Send, ArrowRight } from "lucide-react";

const CompanyInfoPage = ({ empresa }: { empresa?: { fantasyName: string; name: string } }) => {
  const nomeEmpresa = empresa?.fantasyName || empresa?.name || "Empresa";

  return (
    <div className="space-y-8">
      {/* Company Overview */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-paleGreen rounded-xl flex items-center justify-center">
            <Building2 size={20} className="text-deepGreen" />
          </div>
          <h3 className="text-lg font-bold text-deepGreen font-PrimaryFont">
            Sobre a Empresa
          </h3>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <p className="font-SecondFont text-gray-700 leading-relaxed">
            Esta vaga foi publicada por <strong className="text-deepGreen">{nomeEmpresa}</strong>.
          </p>
          <p className="font-SecondFont text-gray-500 text-sm mt-3">
            O perfil completo da empresa ainda não está disponível nesta página.
          </p>
        </div>
      </section>

      {/* Join CTA */}
      <section className="pt-4">
        <div className="bg-gradient-to-r from-mediumGreen to-deepGreen rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-PrimaryFont mb-2">
                Interessado em fazer parte da {nomeEmpresa}?
              </h3>
              <p className="text-white/80 font-SecondFont max-w-xl">
                Candidate-se a esta vaga e dê o próximo passo na sua carreira no agronegócio.
              </p>
            </div>
            <button
              className="group flex items-center gap-3 bg-white text-deepGreen px-8 py-4 rounded-xl
                       font-SecondFont font-bold text-lg hover:bg-paleGreen transition-all duration-300
                       hover:shadow-lg hover:scale-105 whitespace-nowrap"
            >
              <Send size={20} />
              CANDIDATAR-SE
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyInfoPage;
