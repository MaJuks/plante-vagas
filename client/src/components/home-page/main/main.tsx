import { useNavigate } from "react-router";
import bgImage from "../../../assets/images/bg-teste.jpg";
import bgImage2 from "../../../assets/images/plantacao2.jpeg";
import bgImage3 from "../../../assets/images/teste2.jpg";

export default function Main() {
  const navigate = useNavigate();
  return (
    <>
      <section className="relative h-[500px] flex flex-col justify-center items-center text-center py-10 bg-cover bg-center sm:h-[60vh]">
        <div
          className="absolute inset-0 "
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        ></div>
        <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-deepGreen font-PrimaryFont text-left">
            Procure as vagas perfeitas para o seu perfil
          </h2>
          <p className="text-black text-lg sm:text-xl md:text-2xl mt-3  font-PrimaryFont">
            Faça uma pesquisa entre as vagas direcionadas ao agronegócio
          </p>
          <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 mt-6 sm:mt-8 max-w-lg sm:max-w-3xl mx-auto">
            <label className="block text-left text-gray-800 font-medium mb-1 text-lg sm:text-xl  font-SecondFont">
              Procure por vagas ou empresas específicas
            </label>
            <p className="text-gray-500 text-sm sm:text-base mb-4 text-left font-SecondFont">
              Exemplo: auxiliar de produção
            </p>
            <div className="flex flex-col sm:flex-row">
              <input
                type="text"
                placeholder="Pesquisar por cargo ou empresa"
                className="w-full p-3 border border-gray-300 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none focus:outline-none focus:ring-2 focus:ring-green-700"
              />
              <button
                onClick={() => navigate("/pesquisa-de-vagas")}
                className="bg-deepGreen text-white px-3 py-3 rounded-b-lg sm:rounded-r-lg sm:rounded-b-none hover:bg-green-900 font-SecondFont"
              >
                PESQUISAR
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-start px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36">
        <section className="max-w-full lg:max-w-[1000px] px-4 py-10">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-dark-green font-PrimaryFont ">
            Sobre o agro
          </h2>
          <p className="text-base sm:text-lg md:text-xl tracking-wider text-black mt-3 font-SecondFont">
            O número de pessoas trabalhando no agronegócio brasileiro
            ultrapassou 28,1 milhões pela primeira vez desde 2012. Produto
            Interno Bruto (PIB) do Brasil, fechou o ano de 2023 com uma alta de
            2,9%, um total de R$ 10,9 trilhões. Outros avanços importantes foram
            no setor de serviços (2,4%) e na indústria (1,6%).
          </p>
        </section>
      </div>

      <br />

      <div className="relative">
        <section className="relative h-[400px] sm:h-[500px] flex flex-col justify-center items-center text-center py-10 bg-cover bg-center">
          <div
            className="absolute inset-0 z-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage2})` }}
          ></div>
          <div className="bg-white p-4 sm:p-6 md:p-10 rounded-lg shadow-md max-w-sm sm:max-w-md md:max-w-lg mx-auto relative z-20  font-PrimaryFont">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-dark-green">
              Alcance seu público-alvo e contrate o funcionário perfeito para
              sua vaga no agronegócio.
            </h2>
            <p className="text-sm sm:text-base md:text-lg tracking-wider text-black mt-3">
              Tenha acesso a um processo seletivo sob medida para sua empresa e
              selecione o candidato ideal.
            </p>
            <div className="flex justify-center mt-5">
              <button className="bg-deepGreen text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-green-900 text-sm sm:text-base font-semibold">
                ASSINAR SERVIÇO
              </button>
            </div>
          </div>
        </section>
      </div>
      <br />
      <div className="relative">
        <section className="relative h-[500px] sm:h-[700px] flex flex-col py-10 px-4 sm:px-8 md:px-16 lg:px-24">
          <div
            className="absolute inset-0 "
            style={{
              backgroundImage: `url(${bgImage3})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          ></div>
          <div className="relative text-right max-w-3xl mx-auto">
            <div className="relative flex flex-col sm:flex-row justify-between w-full">
              <button className="w-80 h-14 bg-deepGreen text-lg sm:text-xl text-white px-2 sm:px-4 py-1 sm:py-1 rounded-lg hover:bg-green-900 font-SecondFont">
                PROCURAR VAGAS
              </button>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-green mt-4 sm:mt-0  font-PrimaryFont">
                Formando os futuros líderes do agro
              </h2>
            </div>
            <br />
            <p className="text-base sm:text-lg md:text-2xl text-black mt-3 font-PrimaryFont">
              Encontre o estágio ideal para iniciar sua carreira no agro.
              <br />
              Plante iniciativas e colha resultados.
            </p>
          </div>
        </section>
      </div>

      <br />
    </>
  );
}
