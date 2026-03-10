import { MapPin, Briefcase, Monitor, Filter, ChevronDown, Search } from "lucide-react";

const FilterBar = () => {
  return (
    <div className="bg-gradient-to-b from-paleGreen/50 to-white w-full py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-6 border border-gray-100">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por cargo, empresa ou palavra-chave..."
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl
                         focus:outline-none focus:ring-2 focus:ring-mediumGreen focus:border-transparent
                         transition-all duration-300 font-SecondFont"
              />
            </div>
            <button className="flex items-center justify-center gap-2 bg-deepGreen text-white px-8 py-4
                             rounded-xl font-SecondFont font-semibold hover:bg-mediumGreen
                             transition-all duration-300 hover:shadow-lg hover:shadow-deepGreen/20">
              <Search size={18} />
              BUSCAR
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center gap-2 mb-4 text-deepGreen font-SecondFont font-medium">
            <Filter size={18} />
            <span>Filtrar vagas</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Region Filter */}
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-mediumGreen">
                <MapPin size={18} />
              </div>
              <select
                className="w-full pl-12 pr-10 py-4 bg-gray-50 border border-gray-200 rounded-xl
                         appearance-none cursor-pointer font-SecondFont text-gray-700
                         focus:outline-none focus:ring-2 focus:ring-mediumGreen focus:border-transparent
                         hover:border-mediumGreen transition-all duration-300"
              >
                <option>Todas as regiões</option>
                <option>Toledo - PR</option>
                <option>Cascavel - PR</option>
                <option>Maringá - PR</option>
                <option>Palotina - PR</option>
                <option>Santa Tereza - PR</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <ChevronDown size={18} />
              </div>
            </div>

            {/* Area Filter */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-mediumGreen">
                <Briefcase size={18} />
              </div>
              <select
                className="w-full pl-12 pr-10 py-4 bg-gray-50 border border-gray-200 rounded-xl
                         appearance-none cursor-pointer font-SecondFont text-gray-700
                         focus:outline-none focus:ring-2 focus:ring-mediumGreen focus:border-transparent
                         hover:border-mediumGreen transition-all duration-300"
              >
                <option>Todas as áreas</option>
                <option>TI e Desenvolvimento</option>
                <option>Administração e Finanças</option>
                <option>Marketing e Comunicação</option>
                <option>Engenharia</option>
                <option>Vendas e Atendimento</option>
                <option>Produção Agrícola</option>
                <option>Zootecnia e Pecuária</option>
                <option>Comercial e Logística</option>
                <option>Pesquisa e Tecnologia</option>
                <option>Sustentabilidade</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <ChevronDown size={18} />
              </div>
            </div>

            {/* Modality Filter */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-mediumGreen">
                <Monitor size={18} />
              </div>
              <select
                className="w-full pl-12 pr-10 py-4 bg-gray-50 border border-gray-200 rounded-xl
                         appearance-none cursor-pointer font-SecondFont text-gray-700
                         focus:outline-none focus:ring-2 focus:ring-mediumGreen focus:border-transparent
                         hover:border-mediumGreen transition-all duration-300"
              >
                <option>Todas as Modalidades</option>
                <option>Presencial</option>
                <option>Híbrido</option>
                <option>Remoto</option>
                <option>Freelancer</option>
                <option>Temporário</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <ChevronDown size={18} />
              </div>
            </div>

            {/* Filter Button */}
            <button
              className="flex items-center justify-center gap-2 bg-mediumGreen text-white py-4 px-6
                       rounded-xl font-SecondFont font-semibold hover:bg-deepGreen
                       transition-all duration-300 hover:shadow-lg"
            >
              <Filter size={18} />
              APLICAR FILTROS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
