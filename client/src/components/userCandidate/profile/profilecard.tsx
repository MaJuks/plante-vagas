import { UserCircle, MapPin, GraduationCap } from "lucide-react";
import { useUser } from "../userContext";
import { useCurriculum } from "../curriculumContext";

export default function ProfileCard() {
  const { UserData } = useUser();
  const { curriculum, existCurriculum } = useCurriculum();
  const { user } = UserData;

  const addr = user.Address;
  const location = [addr?.city, addr?.state].filter(Boolean).join(" - ");
  const ultimaFormacao = curriculum.formacoes?.[0];

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 font-SecondFont">
          <div className="w-24 h-24 md:w-28 md:h-28 bg-paleGreen/40 rounded-full flex items-center justify-center flex-shrink-0">
            <UserCircle size={56} className="text-deepGreen" aria-hidden="true" />
          </div>

          <div className="text-center md:text-left flex-1">
            <h2 className="text-xl sm:text-2xl font-bold text-deepGreen font-PrimaryFont">
              {user.name}
            </h2>
            {location && (
              <p className="flex items-center justify-center md:justify-start gap-1.5 text-gray-600 text-sm mt-2">
                <MapPin size={14} aria-hidden="true" />
                {location}
              </p>
            )}
            {existCurriculum && ultimaFormacao?.curso && (
              <p className="flex items-center justify-center md:justify-start gap-1.5 text-gray-600 text-sm mt-1">
                <GraduationCap size={14} aria-hidden="true" />
                {ultimaFormacao.curso}
                {ultimaFormacao.nomeInstituicao ? ` · ${ultimaFormacao.nomeInstituicao}` : ""}
              </p>
            )}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10 font-SecondFont">
          <h1 className="text-xl font-bold text-deepGreen font-PrimaryFont mb-2">Seu perfil</h1>
          <p className="text-gray-600 leading-relaxed">
            Atualize seus dados e mantenha seu currículo em dia. As empresas verão essas
            informações quando você se candidatar a uma vaga.
          </p>
        </div>
      </div>
    </div>
  );
}
