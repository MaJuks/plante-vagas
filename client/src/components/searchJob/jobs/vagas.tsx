import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import feather from "feather-icons";
import logoEmpresa from "../../../assets/images/empresas.png";

const Vagas = (props: {
  name: string;
  cidade: string;
  postada: string;
  pcd: any;
  regime: string;
  contratacao: string;
  salario: any;
  descricao: string;
  imagem: any;
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    feather.replace(); // Substitui os ícones no DOM
  }, []);
  return (
    <div className="bg-MediumGray p-6 md:p-8 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4 max-w-3xl mx-auto">
      <div className="flex-1 font-PrimaryFont text-center md:text-left ">
        <h2 className="text-xl font-bold text-deepGreen mb-5 mt-5">
          {props.name}
        </h2>
        <div className="flex flex-wrap justify-center md:justify-start items-center  font-SecondFont text-black text-sm gap-4 mt-1">
          <span className="flex gap-2 font-bold">
            {" "}
            <i data-feather="map-pin" className="w-4 h-4 "></i> {props.cidade}
          </span>
          <span className="flex gap-2 font-bold">
            {" "}
            <i data-feather="clock" className="w-4 h-4 "></i> Postada há{" "}
            {props.postada} horas
          </span>
        </div>

        <hr className="my-2 border-black " />

        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-black text-sm font-SecondFont">
          {props.pcd && (
            <span className="flex gap-2 font-bold items-center">
              <i data-feather="user-check" className="w-4 h-4 "></i> PCD
            </span>
          )}
          <span className="flex gap-2 font-bold items-center">
            {" "}
            <i data-feather="briefcase" className="w-4 h-4 "></i> {props.regime}
          </span>
          <span className="flex gap-2 font-bold items-center">
            {" "}
            <i data-feather="paperclip" className="w-4 h-4 "></i>{" "}
            {props.contratacao}
          </span>
          <span className="flex gap-2 font-bold items-center">
            <i data-feather="dollar-sign" className="w-4 h-4 "></i>{" "}
            {props.salario || "Não informado"}
          </span>
        </div>
        <br />
        <p className="text-black text-sm mt-2 font-SecondFont">
          {props.descricao}
        </p>
      </div>

      <div className="flex flex-col items-center md:items-end w-full md:w-auto font-SecondFont">
        <img
          src={logoEmpresa}
          alt="Logo da empresa"
          className="w-28 h-28 object-contain"
        />

        <button
          className="bg-deepGreen text-white px-6 py-2 rounded-md shadow hover:bg-mediumGreen mt-2 w-full md:w-auto"
          onClick={() => navigate("/Pagina-vaga")}
        >
          VER VAGA
        </button>
      </div>
    </div>
  );
};

export default Vagas;
