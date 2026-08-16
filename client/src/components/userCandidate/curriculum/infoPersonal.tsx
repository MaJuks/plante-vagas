import { useUser } from "../userContext";

const inputLocked = "w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-100 text-gray-500 cursor-not-allowed";
const labelClass = "block text-sm font-medium text-gray-700 mb-2";

export default function PersonalInfo() {
  const { UserData } = useUser();
  const { user } = UserData;

  const dateFormatted = user.dateNasc
    ? new Date(user.dateNasc).toISOString().split("T")[0]
    : "";

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100 font-SecondFont">
        <h1 className="text-2xl font-bold text-deepGreen font-PrimaryFont">Dados pessoais</h1>
        <p className="text-gray-600 mt-2 mb-6">
          Endereço e forma de contato podem ser editados em "Meus dados" e "Endereço". Aqui você
          vê como as empresas enxergam seu perfil.
        </p>

        <div className="mb-5">
          <label className={labelClass}>Nome completo</label>
          <input type="text" disabled value={user.name} className={inputLocked} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <label className={labelClass}>Data de nascimento</label>
            <input type="date" disabled value={dateFormatted} className={inputLocked} />
          </div>

          <div>
            <label className={labelClass}>Gênero</label>
            <div className="flex flex-wrap gap-4 py-3">
              {["Mulher", "Homem", "Outro", "Prefiro Não Dizer"].map((g) => (
                <div key={g} className="flex items-center gap-2">
                  <input type="radio" id={`pinfo-${g}`} name="pinfo-gender" value={g} checked={user.gender === g} readOnly />
                  <label htmlFor={`pinfo-${g}`} className="text-sm text-gray-700">
                    {g === "Prefiro Não Dizer" ? "Prefiro não dizer" : g}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-gray-100 my-6" />

        <div className="mb-6">
          <h2 className="text-lg font-bold text-deepGreen font-PrimaryFont mb-3">Portador de deficiência</h2>
          <div className="flex gap-3">
            {["Sim", "Não"].map((v) => (
              <label
                key={v}
                htmlFor={`pinfo-disable-${v}`}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border ${
                  user.disablePerson === v ? "border-gray-300 bg-gray-100 text-gray-700" : "border-gray-200 text-gray-400"
                }`}
              >
                <input type="radio" id={`pinfo-disable-${v}`} name="pinfo-disable" value={v} checked={user.disablePerson === v} readOnly />
                {v}
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Telefone</label>
            <input type="text" value={user.phone} disabled className={inputLocked} />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input type="text" disabled value={user.email} className={inputLocked} />
          </div>
        </div>
      </div>
    </div>
  );
}
