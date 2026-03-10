import logoEmpresa from "../../../assets/images/images.png";
import Board from "./board";

export default function MainCompanyProfile() {
  const vagas = [
    {
      name: "Auxiliar Agrícola",
      cidade: "Ribeirão Preto - SP",
      postada: "3",
      pcd: true,
      regime: "CLT",
      contratacao: "Imediata",
      salario: "R$ 1.950,00",
    },
    {
      name: "Técnico de Campo",
      cidade: "Sorriso - MT",
      postada: "12",
      pcd: false,
      regime: "PJ",
      contratacao: "30 dias",
      salario: "R$ 4.200,00",
    },
    {
      name: "Engenheiro Agrônomo",
      cidade: "Londrina - PR",
      postada: "1",
      pcd: false,
      regime: "CLT",
      contratacao: "Imediata",
      salario: "R$ 7.500,00",
    },
    {
      name: "Operador de Máquinas",
      cidade: "Lucas do Rio Verde - MT",
      postada: "5",
      pcd: true,
      regime: "CLT",
      contratacao: "15 dias",
      salario: "R$ 3.100,00",
    },
    {
      name: "Gerente de Fazenda",
      cidade: "Uberaba - MG",
      postada: "8",
      pcd: false,
      regime: "PJ",
      contratacao: "A combinar",
      salario: "R$ 9.000,00",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-8 lg:px-20 xl:px-40 2xl:px-80 gap-6 flex flex-col">
      <p className="text-lg font-medium">
        Veja como os usuários enxergam seu perfil.
      </p>

      <div>
        <Board
          name="SOL A SOL"
          imagem={logoEmpresa}
          descricao_curta="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          descricao_longa="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          vagas={vagas}
        />
      </div>
    </div>
  );
}
