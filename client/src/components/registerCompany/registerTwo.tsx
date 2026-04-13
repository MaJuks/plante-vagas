import { useNavigate } from "react-router-dom";
import { useRegister } from "./RegisterContextCompany";
import { useState } from "react";

import { phoneMask } from "../masks/phoneMask";
import { toast } from "sonner";

import { cnpjMask } from "../masks/cnpjMask";
import { cepMask } from "../masks/cepMask";

const RegisterCompanyTwo = () => {
  const navigate = useNavigate();
  const { formData } = useRegister();

  const [name, setName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [socialReason, setSocialReason] = useState("");
  const [openingDate, setOpeningDate] = useState("");
  const [fantasyName, setFantasyName] = useState("");

  // Campos de endereço
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [cepLoading, setCepLoading] = useState(false);

  const [filled, setFilled] = useState<Record<string, boolean>>({});
  const markFilled = (field: string, value: string) =>
    setFilled((prev) => ({ ...prev, [field]: !!value.trim() }));
  const bg = (field: string) => filled[field] ? "bg-MediumGray2" : "bg-LightGray";

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
          setFilled((prev) => ({
            ...prev,
            street: !!data.logradouro,
            district: !!data.bairro,
            city: !!data.localidade,
            state: !!data.uf,
          }));
        }
      } catch {
        toast.error("Erro ao buscar CEP");
      } finally {
        setCepLoading(false);
      }
    }
  };

  const handleSubmit = async () => {
    if (
      !name ||
      !cnpj ||
      !phone ||
      !description ||
      !openingDate ||
      !socialReason ||
      !fantasyName ||
      !cep ||
      !street ||
      !number ||
      !district ||
      !city ||
      !state
    ) {
      toast.error("Preencha todos os campos para avançar", {
        description:
          "Todos os campos a seguir devem ser preenchidos para realizar o cadastro",
        duration: 3000,
      });
    } else {
      const payload = {
        email: formData.email,
        password: formData.password,
        name: name,
        openingDate: new Date(openingDate).toISOString(),
        cnpj: cnpj,
        phone: phone,
        socialReason: socialReason,
        fantasyName: fantasyName,
        description: description,
        address: {
          postalCode: cep,
          street: street,
          number: number,
          complement: complement,
          district: district,
          city: city,
          state: state,
          country: "Brasil",
        },
      };

      console.log(payload);

      try {
        const response = await fetch("http://localhost:3000/company/singup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const result = await response.json();

        if (response.ok) {
          toast.error("Cadastro Realizado com sucesso", {
            duration: 3000,
          });
          navigate("/login");
        } else {
          toast.error("Erro ao realizar caastro", {
            description: result.message,
            duration: 3000,
          });
        }
      } catch (error: any) {
        toast.error("Erro ao realizar caastro", {
          description: error,
          duration: 3000,
        });
      }
    }
  };

  return (
    <>
      <div className="grid bg-white p-6 sm:p-12 rounded-lg shadow-md font-SecondFont max-w-full sm:w-[700px] mx-auto">
        <h1 className="text-xl  ">Passo 2 de 2</h1>

        <div className="grid mt-6 mb-3">
          <label htmlFor="nome" className="text-start text-lg mt-2 mb-2">
            Nome Completo
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={(e) => markFilled("name", e.target.value)}
            placeholder="Insira seu nome aqui."
            className={`border-2 border-deepGreen rounded-lg shadow-md p-3 pl-3 text-black transition-colors ${bg("name")}`}
          />
        </div>

        <div className="grid mt-3 mb-6">
          <label className="text-start text-lg mt-2 mb-2">CNPJ</label>
          <input
            type="text"
            id="CPF"
            name="CPF"
            value={cnpj}
            onChange={(e) => setCnpj(cnpjMask(e.target.value))}
            onBlur={(e) => markFilled("cnpj", e.target.value)}
            placeholder="000.000.000-00"
            className={`border-2 border-deepGreen rounded-lg shadow-md p-3 pl-3 text-left text-black w-full transition-colors ${bg("cnpj")}`}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-3 mb-6">
          <div>
            <label className="text-start text-lg mt-2 mb-2">
              Telefone/Celular
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={phone}
              onChange={(e) => setPhone(phoneMask(e.target.value))}
              onBlur={(e) => markFilled("phone", e.target.value)}
              placeholder="99 99 99999-9999"
              className={`border-2 border-deepGreen rounded-lg shadow-md p-3 pl-3 text-black w-full transition-colors ${bg("phone")}`}
            />
          </div>

          <div>
            <label className="text-start text-lg mt-2 mb-2">
              Data de abertura
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={openingDate}
              onChange={(e) => setOpeningDate(e.target.value)}
              onBlur={(e) => markFilled("openingDate", e.target.value)}
              placeholder="00/00/0000"
              className={`border-2 border-deepGreen rounded-lg shadow-md p-3 pl-3 text-black w-full transition-colors ${bg("openingDate")}`}
            />
          </div>
        </div>

        <label className="text-start text-lg mt-2 mb-2">
          Insira uma descrição da empresa{" "}
        </label>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              id="text"
              name="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              onBlur={(e) => markFilled("description", e.target.value)}
              className={`form-radio text-deepGreen border-2 border-deepGreen rounded w-full transition-colors ${bg("description")}`}
            />
          </div>
        </div>

        <label className="text-start text-lg mt-2 mb-2">Razão Social </label>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              id="text"
              name="text"
              value={socialReason}
              onChange={(e) => setSocialReason(e.target.value)}
              onBlur={(e) => markFilled("socialReason", e.target.value)}
              className={`form-radio text-deepGreen border-2 border-deepGreen rounded w-full transition-colors ${bg("socialReason")}`}
            />
          </div>
        </div>

        <label className="text-start text-lg mt-2 mb-2">
          Nome fantasia da sua empresa{" "}
        </label>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              id="text"
              name="text"
              value={fantasyName}
              onChange={(e) => setFantasyName(e.target.value)}
              onBlur={(e) => markFilled("fantasyName", e.target.value)}
              className={`form-radio text-deepGreen border-2 border-deepGreen rounded w-full transition-colors ${bg("fantasyName")}`}
            />
          </div>
        </div>

        {/* Seção de Endereço */}
        <div className="text-start text-lg mt-6 mb-2">
          <h1 className="text-green-900 text-2xl">Endereço da Empresa</h1>
        </div>

        <div className="grid mt-3 mb-3">
          <label htmlFor="cep" className="text-start text-lg mt-2 mb-2">
            CEP
          </label>
          <div className="relative">
            <input
              type="text"
              id="cep"
              name="cep"
              value={cep}
              onChange={handleCepChange}
              placeholder="00000-000"
              className="border-2 border-deepGreen rounded-lg shadow-md p-3 pl-3 text-black bg-LightGray w-full"
            />
            {cepLoading && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                Buscando...
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-3 mb-3">
          <div>
            <label htmlFor="street" className="text-start text-lg mt-2 mb-2">
              Rua
            </label>
            <input
              type="text"
              id="street"
              name="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              onBlur={(e) => markFilled("street", e.target.value)}
              placeholder="Nome da rua"
              className={`border-2 border-deepGreen rounded-lg shadow-md p-3 pl-3 text-black w-full transition-colors ${bg("street")}`}
            />
          </div>
          <div>
            <label htmlFor="number" className="text-start text-lg mt-2 mb-2">
              Número
            </label>
            <input
              type="text"
              id="number"
              name="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              onBlur={(e) => markFilled("number", e.target.value)}
              placeholder="Nº"
              className={`border-2 border-deepGreen rounded-lg shadow-md p-3 pl-3 text-black w-full transition-colors ${bg("number")}`}
            />
          </div>
        </div>

        <div className="grid mt-3 mb-3">
          <label htmlFor="complement" className="text-start text-lg mt-2 mb-2">
            Complemento (opcional)
          </label>
          <input
            type="text"
            id="complement"
            name="complement"
            value={complement}
            onChange={(e) => setComplement(e.target.value)}
            onBlur={(e) => markFilled("complement", e.target.value)}
            placeholder="Sala, andar, etc."
            className={`border-2 border-deepGreen rounded-lg shadow-md p-3 pl-3 text-black transition-colors ${bg("complement")}`}
          />
        </div>

        <div className="grid mt-3 mb-3">
          <label htmlFor="district" className="text-start text-lg mt-2 mb-2">
            Bairro
          </label>
          <input
            type="text"
            id="district"
            name="district"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            onBlur={(e) => markFilled("district", e.target.value)}
            placeholder="Nome do bairro"
            className={`border-2 border-deepGreen rounded-lg shadow-md p-3 pl-3 text-black transition-colors ${bg("district")}`}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-3 mb-3">
          <div>
            <label htmlFor="city" className="text-start text-lg mt-2 mb-2">
              Cidade
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onBlur={(e) => markFilled("city", e.target.value)}
              placeholder="Nome da cidade"
              className={`border-2 border-deepGreen rounded-lg shadow-md p-3 pl-3 text-black w-full transition-colors ${bg("city")}`}
            />
          </div>
          <div>
            <label htmlFor="state" className="text-start text-lg mt-2 mb-2">
              Estado
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              onBlur={(e) => markFilled("state", e.target.value)}
              placeholder="UF"
              className={`border-2 border-deepGreen rounded-lg shadow-md p-3 pl-3 text-black w-full transition-colors ${bg("state")}`}
            />
          </div>
        </div>

        <div className="grid justify-center">
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-80 h-14 bg-deepGreen text-lg sm:text-xl text-white px-2 sm:px-4 py-1 sm:py-1 rounded-lg hover:bg-mediumGreen font-SecondFont mt-12 mb-4"
          >
            Cadastrar-se
          </button>
        </div>
      </div>
    </>
  );
};

export default RegisterCompanyTwo;
