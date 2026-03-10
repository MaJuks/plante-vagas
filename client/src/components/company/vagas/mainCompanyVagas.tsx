import VagasCompanyVagas from "./vagasCompanyVagas";
import { useNavigate } from "react-router";

export default function MainCompanyVagas() {
  const vagas = [
    {
      name: "Auxiliar Agrícola",
      cidade: "Ribeirão Preto - SP",
      postada: "3",
      pcd: true,
      regime: "CLT",
      contratacao: "Imediata",
      salario: "R$ 1.950,00",
      descricao:
        "Responsável por atividades de apoio no cultivo, irrigação e manejo de plantações. Auxilia na organização e limpeza do ambiente agrícola.",
    },
    {
      name: "Técnico de Campo",
      cidade: "Sorriso - MT",
      postada: "12",
      pcd: false,
      regime: "PJ",
      contratacao: "30 dias",
      salario: "R$ 4.200,00",
      descricao:
        "Realiza visitas técnicas, acompanha lavouras, coleta dados de produtividade e presta suporte agronômico a clientes e parceiros.",
    },
    {
      name: "Engenheiro Agrônomo",
      cidade: "Londrina - PR",
      postada: "1",
      pcd: false,
      regime: "CLT",
      contratacao: "Imediata",
      salario: "R$ 7.500,00",
      descricao:
        "Atua no planejamento, execução e acompanhamento de atividades agrícolas, com foco em aumento de produtividade e uso racional de insumos.",
    },
    {
      name: "Operador de Máquinas",
      cidade: "Lucas do Rio Verde - MT",
      postada: "5",
      pcd: true,
      regime: "CLT",
      contratacao: "15 dias",
      salario: "R$ 3.100,00",
      descricao:
        "Opera tratores, colheitadeiras e outras máquinas agrícolas, garantindo o bom funcionamento dos equipamentos durante o plantio e a colheita.",
    },
    {
      name: "Gerente de Fazenda",
      cidade: "Uberaba - MG",
      postada: "8",
      pcd: false,
      regime: "PJ",
      contratacao: "A combinar",
      salario: "R$ 9.000,00",
      descricao:
        "Responsável pela gestão operacional, administrativa e de pessoal da fazenda. Elabora relatórios e supervisiona todas as áreas de produção.",
    },
  ];
  const navigate = useNavigate();

  return (
    <>
      <div className="mt-20 bg-paleGreen font-SecondFont py-10 px-6 sm:px-10 md:px-20 lg:px-43">
        <span className="text-lg sm:text-xl">Vagas Abertas</span>
      </div>

      <br />

      <div className="flex flex-col bg-paleGreen font-SecondFont py-10 px-6 sm:px-10 md:px-20 lg:px-43 justify-center">
        <div className="flex justify-center mb-10">
          <button
            onClick={() => navigate("/criar-vaga")}
            className="bg-oliveGreen h-30 w-30 cursor-pointer rounded-lg text-6xl text-deepGreen shadow-md"
          >
            +
          </button>
        </div>

        <VagasCompanyVagas vagas={vagas} />
      </div>
    </>
  );
}
