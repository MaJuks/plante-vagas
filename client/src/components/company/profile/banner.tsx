import { useEffect } from "react";
import feather from "feather-icons";
import { useUser } from "../userContextCompany";
import logoEmpresa from "../../../assets/images/logo.png";

const Banner = () => {
  const { UserData } = useUser();
  useEffect(() => {
    feather.replace(); // Substitui os ícones no DOM
  }, []);
  return (
    <div className="bg-white rounded-md shadow-lg p-6 sm:p-10 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-10 text-base sm:text-xl font-SecondFont">
      <img
        src={logoEmpresa}
        alt="Logo da empresa"
        className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
      />

      <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1">
        <p className="font-semibold">Área da empresa contratante</p>
        <p>{UserData.user.fantasyName}</p>
      </div>

      <div className="hidden sm:block w-px h-20 bg-black" />

      <div className="flex justify-center items-center text-center">
        <p>Usuário Administrador</p>
      </div>
    </div>
  );
};

export default Banner;
