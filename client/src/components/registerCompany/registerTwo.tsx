import { useNavigate } from "react-router-dom";
import { useRegister } from "./RegisterContextCompany";
import { useState } from "react";

import { phoneMask } from "../masks/phoneMask";
import { toast } from "sonner";

import { cnpjMask } from "../masks/cnpjMask";

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

  const handleSubmit = async () => {
    if (
      !name ||
      !cnpj ||
      !phone ||
      !description ||
      !openingDate ||
      !socialReason ||
      !fantasyName
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
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Insira seu nome aqui."
            className="border-2 border-deepGreen rounded-lg shadow-md p-3 pl-3 text-black bg-LightGray"
          />
        </div>

        <div className="grid mt-3 mb-6">
          <label className="text-start text-lg mt-2 mb-2">CNPJ</label>
          <input
            type="text"
            id="CPF"
            name="CPF"
            value={cnpj}
            onChange={(e) => {
              const maskedCnpj = cnpjMask(e.target.value);
              setCnpj(maskedCnpj);
            }}
            placeholder="000.000.000-00"
            className="border-2 border-deepGreen rounded-lg shadow-md p-3 pl-3 text-left text-black bg-LightGray w-full"
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
              onChange={(e) => {
                const maskedPhone = phoneMask(e.target.value);
                setPhone(maskedPhone);
              }}
              placeholder="99 99 99999-9999"
              className="border-2 border-deepGreen rounded-lg shadow-md p-3 pl-3 text-black bg-LightGray w-full"
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
              onChange={(e) => {
                setOpeningDate(e.target.value);
              }}
              placeholder="00/00/0000"
              className="border-2 border-deepGreen rounded-lg shadow-md p-3 pl-3  text-black  bg-LightGray w-full"
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
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="form-radio text-deepGreen border-2 border-deepGreen rounded w-full"
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
              onChange={(e) => {
                setSocialReason(e.target.value);
              }}
              className="form-radio text-deepGreen border-2 border-deepGreen rounded w-full"
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
              onChange={(e) => {
                setFantasyName(e.target.value);
              }}
              className="form-radio text-deepGreen border-2 border-deepGreen rounded w-full"
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
