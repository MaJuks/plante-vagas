import { useUser } from "../userContext";

export default function PersonalInfo() {
  const { UserData } = useUser();
  const { user } = UserData;

  const dateFormatted = user.dateNasc
    ? new Date(user.dateNasc).toISOString().split("T")[0]
    : "";

  return (
    <>
      <div className="flex flex-col p-8 md:p-36 lg:p-40 w-full bg-MediumGray max-w-6xl mx-auto font-SecondFont">
        <h1 className="text-xl">Dados Pessoais</h1>
        <span className="mt-4">
          As informações pessoais como endereço e forma de contato podem ser
          editados no seu perfil.
        </span>
        <span>Aqui você pode ver como os empregadores verão seu perfil.</span>
        <br />

        <div className="flex flex-col md:flex-row my-3 text-DeepGray gap-4 md:gap-8 lg:gap-16">
          <div className="flex flex-col w-full">
            <label>Nome completo</label>
            <input
              type="text"
              disabled
              value={user.name}
              className="w-full border-1 rounded-sm mt-1 p-1 pl-4"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row my-3 text-DeepGray gap-4 md:gap-8 lg:gap-16">
          <div className="flex flex-col w-full md:w-1/3">
            <label>Data de Nascimento</label>
            <input
              type="date"
              disabled
              value={dateFormatted}
              className="w-full border-1 rounded-sm mt-1 p-1 pl-4"
            />
          </div>

          <div className="flex flex-col w-full md:w-2/3">
            <label>Gênero</label>
            <div className="flex flex-wrap gap-4">
              {["feminino", "masculino", "outro", "prefiroNaoDizer"].map((g) => (
                <div key={g} className="flex items-center gap-2">
                  <input
                    type="radio"
                    id={`pinfo-${g}`}
                    name="pinfo-gender"
                    value={g}
                    checked={user.gender === g}
                    readOnly
                  />
                  <label htmlFor={`pinfo-${g}`}>
                    {{ feminino: "Feminino", masculino: "Masculino", outro: "Outro", prefiroNaoDizer: "Prefiro não dizer" }[g]}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 my-3 mb-8">
          <div className="flex flex-col text-DeepGray w-full lg:w-1/3">
            <h2 className="text-lg md:text-xl">Portador de deficiência:</h2>
            <div className="flex gap-4 md:gap-8">
              {["yes", "no"].map((v) => (
                <div key={v} className="flex items-center gap-2">
                  <input
                    type="radio"
                    id={`pinfo-disable-${v}`}
                    name="pinfo-disable"
                    value={v}
                    checked={user.disablePerson === v}
                    readOnly
                  />
                  <label htmlFor={`pinfo-disable-${v}`}>{v === "yes" ? "Sim" : "Não"}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-full lg:w-2/3">
            <div className="flex flex-col text-DeepGray w-full md:w-1/3">
              <label>Telefone</label>
              <input
                type="text"
                value={user.phone}
                disabled
                className="w-full border-1 rounded-sm mt-1 p-1 pl-4"
              />
            </div>

            <div className="flex flex-col text-DeepGray w-full md:w-2/3">
              <label>Email</label>
              <input
                type="text"
                disabled
                value={user.email}
                className="w-full border-1 rounded-sm mt-1 p-1 pl-4"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
