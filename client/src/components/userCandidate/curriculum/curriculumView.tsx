import { useCurriculum } from "../curriculumContext";
import { useUser } from "../userContext";
import {
  User,
  Star,
  MapPin,
  Mail,
  Phone,
  FilePlus2,
  Upload,
} from "lucide-react";
import CurriculumSections, { SectionTitle } from "./curriculumSections";

type Props = {
  onCreate?: () => void;
  onImport?: () => void;
};

export default function CurriculumView({ onCreate, onImport }: Props) {
  const { curriculum, existCurriculum } = useCurriculum();
  const { UserData } = useUser();
  const { user } = UserData;

  const addr = user.Address;
  const location = [addr?.city, addr?.state].filter(Boolean).join(" — ");

  if (!existCurriculum) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-8 sm:py-12 px-4 sm:px-8 font-SecondFont text-center gap-4">
        <Star className="w-12 h-12 text-deepGreen opacity-40" aria-hidden="true" />
        <h1 className="text-xl text-gray-600">Seu currículo ainda não foi criado.</h1>
        <p className="text-gray-500 text-sm mb-2">
          Comece do zero ou importe um currículo em PDF pra preencher tudo automaticamente.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onCreate}
            className="flex items-center justify-center gap-2 bg-deepGreen text-white px-6 py-3 rounded-xl font-medium hover:bg-mediumGreen transition-colors duration-200"
          >
            <FilePlus2 size={18} aria-hidden="true" />
            Fazer meu currículo
          </button>
          <button
            onClick={onImport}
            className="flex items-center justify-center gap-2 border border-deepGreen text-deepGreen px-6 py-3 rounded-xl font-medium hover:bg-deepGreen hover:text-white transition-colors duration-200"
          >
            <Upload size={18} aria-hidden="true" />
            Importar PDF
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100 font-SecondFont">

      {/* Cabeçalho */}
      <div className="bg-paleGreen/40 border border-paleGreen rounded-xl p-6 mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-deepGreen">{user.name || "—"}</h1>
        <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3 text-sm text-gray-600">
          {user.email && (
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4" /> {user.email}
            </span>
          )}
          {user.phone && (
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4" /> {user.phone}
            </span>
          )}
          {location && (
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" /> {location}
            </span>
          )}
        </div>
        {user.disablePerson === "Sim" && (
          <span className="inline-block mt-3 text-xs px-2 py-1 bg-deepGreen text-white rounded-full">
            PcD
          </span>
        )}
      </div>

      {/* Informações Pessoais */}
      <div className="mb-8">
        <SectionTitle icon={User} title="Informações Pessoais" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
          {user.dateNasc && (
            <div>
              <span className="text-gray-400 block text-xs mb-1">Data de Nascimento</span>
              {new Date(user.dateNasc).toLocaleDateString("pt-BR")}
            </div>
          )}
          {user.gender && (
            <div>
              <span className="text-gray-400 block text-xs mb-1">Gênero</span>
              {user.gender}
            </div>
          )}
          {addr && (
            <div>
              <span className="text-gray-400 block text-xs mb-1">Endereço</span>
              {[addr.street, addr.number, addr.district, addr.city, addr.state].filter(Boolean).join(", ")}
            </div>
          )}
        </div>
      </div>

      <CurriculumSections curriculum={curriculum} />

      </div>
    </div>
  );
}
