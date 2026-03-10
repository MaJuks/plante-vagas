import SubHeader from "../../home-page/headers/subHeader";

export default function MyData() {
  return (
    <>
      <div className="flex flex-col p-8 md:p-36 lg:p-40 w-full bg-MediumGray max-w-6xl mx-auto font-SecondFont">
        <SubHeader />

        <div className="flex flex-col md:flex-row my-4 md:my-6 text-DeepGray gap-4">
          <div className="flex flex-col w-full md:w-1/2 md:mr-4">
            <label>Nome:</label>
            <input
              type="text"
              disabled
              value="Maria Júlia"
              className="w-full border-1 rounded-sm mt-1 p-1 pl-4"
            />
          </div>

          <div className="flex flex-col w-full md:w-1/2">
            <label>Sobrenome:</label>
            <input
              type="text"
              disabled
              value="Lemes Marcolin Tenório"
              className="w-full border-1 rounded-sm mt-1 p-1 pl-4"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row my-4 md:my-6 text-DeepGray gap-4">
          <div className="flex flex-col w-full md:w-1/3">
            <label className="">Data de Nascimento:</label>
            <input
              type="date"
              disabled
              value="2004-07-05"
              className="w-full border-1 rounded-sm mt-1 p-1 pl-4"
            />
          </div>

          <div className="flex flex-col w-full md:w-2/3">
            <label> Gênero: </label>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="feminino"
                  name="gender"
                  checked
                  value="feminino"
                />
                <label htmlFor="feminino">Feminino</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="masculino"
                  name="gender"
                  value="masculino"
                />
                <label htmlFor="masculino">Masculino</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" id="outro" name="gender" value="outro" />
                <label htmlFor="outro">Outro</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="prefiroNaoDizer"
                  name="gender"
                  value="prefiroNaoDizer"
                />
                <label htmlFor="prefiroNaoDizer">Prefiro não dizer</label>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="flex flex-col my-4">
          <h1 className="text-lg md:text-xl"> Portador de deficiência: </h1>
          <p className="text-DeepGray">
            Gostaria de se candidatar as vagas como portador de deficiência?{" "}
          </p>
          <div className="flex gap-4 md:gap-8 text-DeepGray">
            <div className="flex items-center gap-2">
              <input type="radio" id="sim" value="yes" />
              <label htmlFor="sim"> Sim</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" id="nao" checked value="no" />
              <label htmlFor="nao"> Não </label>
            </div>
          </div>
        </div>

        <h1 className="text-lg md:text-xl mt-6 mb-2"> Informações Pessoais:</h1>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col w-full md:w-1/2 text-DeepGray">
            <label>Telefone * </label>
            <input
              type="text"
              value="+55 45 99048441"
              disabled
              className="w-full border-1 rounded-sm mt-1 p-1 pl-4"
            />
          </div>

          <div className="flex flex-col w-full md:w-1/2 text-DeepGray">
            <label>Email * </label>
            <input
              type="text"
              disabled
              value="igorgoncalvesmarcolintenorio@gmail.com"
              className="w-full border-1 rounded-sm mt-1 p-1 pl-4"
            />
          </div>
        </div>
      </div>
    </>
  );
}
