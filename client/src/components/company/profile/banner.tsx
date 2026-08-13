import { Building2, ShieldCheck } from "lucide-react";
import { useUser } from "../userContextCompany";

const Banner = () => {
  const { UserData } = useUser();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-10 font-SecondFont">
      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-paleGreen/40 rounded-2xl flex items-center justify-center flex-shrink-0">
        <Building2 size={36} className="text-deepGreen" aria-hidden="true" />
      </div>

      <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1 flex-1">
        <p className="font-semibold text-gray-500 text-sm uppercase tracking-wide">
          Área da empresa contratante
        </p>
        <p className="text-xl font-bold text-deepGreen font-PrimaryFont">
          {UserData.user.fantasyName || UserData.user.name}
        </p>
      </div>

      <div className="hidden sm:block w-px h-16 bg-gray-200" />

      <div className="flex items-center gap-2 text-deepGreen">
        <ShieldCheck size={20} aria-hidden="true" />
        <p className="font-medium">Usuário Administrador</p>
      </div>
    </div>
  );
};

export default Banner;
