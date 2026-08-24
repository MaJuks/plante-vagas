import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Building2, Phone, Calendar, MapPin, ArrowLeft, Lock, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useUser } from "../userContextCompany";
import { phoneMask } from "../../masks/phoneMask";
import { cepMask } from "../../masks/cepMask";
import { updateCompanyCadastro } from "@/services/company";

const CompanySettingsForm = () => {
  const navigate = useNavigate();
  const { UserData, refreshUser } = useUser();
  const user = UserData.user;

  const [name, setName] = useState(user.name || "");
  const [fantasyName, setFantasyName] = useState(user.fantasyName || "");
  const [socialReason, setSocialReason] = useState(user.socialReason || "");
  const [phone, setPhone] = useState(user.phone ? phoneMask(user.phone) : "");
  const [openingDate, setOpeningDate] = useState(
    user.openingDate ? user.openingDate.slice(0, 10) : ""
  );

  const [cep, setCep] = useState(user.Address?.postalCode ? cepMask(user.Address.postalCode) : "");
  const [street, setStreet] = useState(user.Address?.street || "");
  const [number, setNumber] = useState(user.Address?.number || "");
  const [complement, setComplement] = useState(user.Address?.complement || "");
  const [district, setDistrict] = useState(user.Address?.district || "");
  const [city, setCity] = useState(user.Address?.city || "");
  const [state, setState] = useState(user.Address?.state || "");
  const [cepLoading, setCepLoading] = useState(false);
  const [salvando, setSalvando] = useState(false);

  const handleCepChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const masked = cepMask(e.target.value);
    setCep(masked);
    const cleaned = masked.replace("-", "");
    if (cleaned.length === 8) {
      setCepLoading(true);
      try {
        const res = await fetch(`https://viacep.com.br/ws/${cleaned}/json/`);
        const data = await res.json();
        if (data.erro) {
          toast.error("CEP não encontrado");
        } else {
          setStreet(data.logradouro || "");
          setDistrict(data.bairro || "");
          setCity(data.localidade || "");
          setState(data.uf || "");
        }
      } catch {
        toast.error("Erro ao buscar CEP");
      } finally {
        setCepLoading(false);
      }
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSalvando(true);
    try {
      await updateCompanyCadastro({
        name,
        fantasyName,
        socialReason,
        phone: phone.replace(/\D/g, ""),
        openingDate,
        address: {
          city,
          district,
          street,
          number,
          complement,
          postalCode: cep.replace("-", ""),
          state,
        },
      });
      await refreshUser();
      toast.success("Dados de cadastro atualizados!");
      navigate("/empresa");
    } catch (error: any) {
      toast.error(error.message || "Erro ao salvar alterações");
    } finally {
      setSalvando(false);
    }
  };

  const inputClass =
    "w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-mediumGreen focus:border-transparent transition-all duration-300";
  const plainInputClass =
    "w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-mediumGreen focus:border-transparent transition-all duration-300";
  const labelClass = "block text-sm font-medium text-gray-700 mb-2";

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-8 py-12">
        <button
          onClick={() => navigate("/empresa")}
          className="flex items-center gap-2 text-gray-600 hover:text-deepGreen transition-colors duration-200 mb-6 font-SecondFont text-sm"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Voltar para o perfil
        </button>

        <form
          onSubmit={handleSave}
          className="w-full bg-white p-8 sm:p-10 rounded-2xl shadow-lg border border-gray-100 font-SecondFont text-gray-800"
        >
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-deepGreen font-PrimaryFont">Configurações</h1>
            <p className="text-gray-600 mt-2">
              Edite os dados de cadastro da sua empresa
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label htmlFor="nome" className={labelClass}>Nome da Empresa</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Building2 size={20} aria-hidden="true" />
                </div>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  autoComplete="organization"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="fantasy-name" className={labelClass}>Nome fantasia</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Building2 size={20} aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    id="fantasy-name"
                    name="fantasy-name"
                    value={fantasyName}
                    onChange={(e) => setFantasyName(e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="social-reason" className={labelClass}>Razão Social</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Building2 size={20} aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    id="social-reason"
                    name="social-reason"
                    autoComplete="organization"
                    value={socialReason}
                    onChange={(e) => setSocialReason(e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="cnpj" className={labelClass}>CNPJ</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock size={20} aria-hidden="true" />
                </div>
                <input
                  type="text"
                  id="cnpj"
                  value={user.cnpj}
                  disabled
                  className={`${inputClass} bg-gray-100 text-gray-500 cursor-not-allowed`}
                />
              </div>
              <p className="text-xs text-gray-400 mt-1.5">O CNPJ não pode ser alterado.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="telephone" className={labelClass}>Telefone/Celular</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Phone size={20} aria-hidden="true" />
                  </div>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(phoneMask(e.target.value))}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="date" className={labelClass}>Data de abertura</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Calendar size={20} aria-hidden="true" />
                  </div>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={openingDate}
                    onChange={(e) => setOpeningDate(e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            {/* Endereço */}
            <div className="pt-2">
              <div className="flex items-center gap-2 text-deepGreen font-semibold mb-4">
                <MapPin size={18} aria-hidden="true" />
                <h2 className="font-PrimaryFont text-lg">Endereço da Empresa</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label htmlFor="cep" className={labelClass}>CEP</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="cep"
                      name="cep"
                      autoComplete="postal-code"
                      value={cep}
                      onChange={handleCepChange}
                      placeholder="00000-000"
                      className={plainInputClass}
                    />
                    {cepLoading && (
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                        Buscando...
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-5">
                  <div>
                    <label htmlFor="street" className={labelClass}>Rua</label>
                    <input
                      type="text"
                      id="street"
                      name="street"
                      autoComplete="address-line1"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      className={plainInputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="number" className={labelClass}>Número</label>
                    <input
                      type="text"
                      id="number"
                      name="number"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      className={plainInputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="complement" className={labelClass}>Complemento (opcional)</label>
                  <input
                    type="text"
                    id="complement"
                    name="complement"
                    value={complement}
                    onChange={(e) => setComplement(e.target.value)}
                    className={plainInputClass}
                  />
                </div>

                <div>
                  <label htmlFor="district" className={labelClass}>Bairro</label>
                  <input
                    type="text"
                    id="district"
                    name="district"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className={plainInputClass}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="city" className={labelClass}>Cidade</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      autoComplete="address-level2"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className={plainInputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className={labelClass}>Estado</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      autoComplete="address-level1"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      placeholder="UF"
                      className={plainInputClass}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                disabled={salvando}
                className="flex-1 flex items-center justify-center gap-2 bg-deepGreen text-white py-4 rounded-xl font-semibold text-lg hover:bg-mediumGreen transition-colors duration-300 disabled:opacity-60"
              >
                {salvando && <Loader2 size={20} className="animate-spin" aria-hidden="true" />}
                {salvando ? "Salvando..." : "SALVAR ALTERAÇÕES"}
              </button>
              <button
                type="button"
                onClick={() => navigate("/empresa")}
                className="flex-1 flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors duration-300"
              >
                CANCELAR
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanySettingsForm;
