export default function PersonalInfo() {
  return (
    <>
      <div className="flex flex-col p-8  md:p-36 lg:p-40 w-full bg-MediumGray max-w-6xl mx-auto font-SecondFont">
        <h1 className="text-xl">Dados Pessoais</h1>
        <span className="mt-4">
          As informações pessoais como endereço e forma de contato podem ser
          editados no seu perfil.
        </span>
        <span>Aqui você pode ver como os empregadores verão seu perfil.</span>
        <br />

        <div className="flex flex-col md:flex-row my-3 text-DeepGray gap-4 md:gap-8 lg:gap-16">
          <div className="flex flex-col w-full md:w-1/2">
            <label>Nome</label>
            <input
              type="text"
              disabled
              value="Maria Júlia"
              className="w-full border-1 rounded-sm mt-1 p-1 pl-4"
            />
          </div>

          <div className="flex flex-col w-full md:w-1/2">
            <label>Sobrenome</label>
            <input
              type="text"
              disabled
              value="Lemes Marcolin Tenório"
              className="w-full border-1 rounded-sm mt-1 p-1 pl-4"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row my-3 text-DeepGray gap-4 md:gap-8 lg:gap-16">
          <div className="flex flex-col w-full md:w-1/3">
            <label className="">Data de Nascimento</label>
            <input
              type="date"
              disabled
              value="2004-07-05"
              className="w-full border-1 rounded-sm mt-1 p-1 pl-4"
            />
          </div>

          <div className="flex flex-col w-full md:w-2/3">
            <label>Gênero </label>
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

        <div className="flex flex-col lg:flex-row gap-4 my-3 mb-8">
          <div className="flex flex-col text-DeepGray w-full lg:w-1/3">
            <h2 className="text-lg md:text-xl">Portador de deficiência:</h2>
            <div className="flex gap-4 md:gap-8">
              <div className="flex items-center gap-2">
                <input type="radio" id="sim" value="yes" />
                <label htmlFor="sim">Sim</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" id="nao" checked value="no" />
                <label htmlFor="nao">Não</label>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-full lg:w-2/3">
            <div className="flex flex-col text-DeepGray w-full md:w-1/3">
              <label>Telefone *</label>
              <input
                type="text"
                value="+55 45 99048441"
                disabled
                className="w-full border-1 rounded-sm mt-1 p-1 pl-4"
              />
            </div>

            <div className="flex flex-col text-DeepGray w-full md:w-2/3">
              <label>Email *</label>
              <input
                type="text"
                disabled
                value="igorgoncalvesmarcolintenorio@gmail.com"
                className="w-full border-1 rounded-sm mt-1 p-1 pl-4"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 mb-6">
          <h2 className="text-lg md:text-xl mb-4">Endereço</h2>

          <div className="flex flex-col md:flex-row gap-4 text-DeepGray">
            <div className="flex flex-col w-full md:w-1/4">
              <label>CEP:</label>
              <input
                type="text"
                disabled
                value="85819-740"
                className="w-full border-1 rounded-sm mt-1 p-1 pl-4"
              />
            </div>
            <div className="flex flex-col w-full md:w-2/4">
              <label>Logradouro:</label>
              <input
                type="text"
                disabled
                value="Rua Lapa"
                className="w-full border-1 rounded-sm mt-1 p-1 pl-4"
              />
            </div>
            <div className="flex flex-col w-full md:w-1/4">
              <label>Número:</label>
              <input
                type="text"
                disabled
                value="544"
                className="w-full border-1 rounded-sm mt-1 p-1 pl-4"
              />
            </div>
          </div>

          {/* Bairro, Complemento, Cidade */}
          <div className="flex flex-col md:flex-row gap-4 text-DeepGray mt-4">
            <div className="flex flex-col w-full md:w-1/3">
              <label>Bairro:</label>
              <input
                type="text"
                disabled
                value="85819-740"
                className="w-full border-1 rounded-sm mt-1 p-1 pl-4"
              />
            </div>
            <div className="flex flex-col w-full md:w-1/3">
              <label>Complemento:</label>
              <input
                type="text"
                disabled
                value="Rua Lapa"
                className="w-full border-1 rounded-sm mt-1 p-1 pl-4"
              />
            </div>
            <div className="flex flex-col w-full md:w-1/3">
              <label>Cidade:</label>
              <input
                type="text"
                disabled
                value="544"
                className="w-full border-1 rounded-sm mt-1 p-1 pl-4"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 text-DeepGray mt-4">
            <div className="flex flex-col w-full sm:w-1/2">
              <label>País:</label>
              <input
                type="text"
                disabled
                value="Brasil"
                className="w-full border-1 rounded-sm mt-1 p-1 pl-4"
              />
            </div>

            <div className="flex flex-col w-full sm:w-1/2">
              <label>Estado:</label>
              <input
                type="text"
                disabled
                value="São Paulo"
                className="w-full border-1 rounded-sm mt-1 p-1 pl-4"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
