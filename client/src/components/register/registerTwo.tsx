import { useNavigate } from "react-router-dom";
import { useRegister } from "./RegisterContext";
import { useState } from "react";
import { cpfMask } from "../masks/cpfMask";
import { phoneMask } from "../masks/phoneMask";
import { toast } from "sonner";

const RegisterTwo = () => {
  const navigate = useNavigate();
  const { formData } = useRegister();

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [dateNasc, setDateNasc] = useState("");
  const [gender, setGender] = useState("");
  const [disablePerson, setDisablePerson] = useState("");

  const handleSubmit = async () => {
    if (!name || !cpf || !phone || !dateNasc || !gender || !disablePerson) {
      toast.error("Preencha todos os campos para avançar", {
        description:
          "Todos os campos a seguir devem ser preenchidos para realizar o cadastro",
        duration: 3000,
      });
    } else {
      const payload = {
        userData: {
          email: formData.email,
          password: formData.password,
          name: name,
          dateNasc: new Date(dateNasc).toISOString(),
          cpf: cpf,
          phone: phone,
          gender: gender,
          disablePerson: disablePerson,
        },
      };

      try {
        const response = await fetch("http://localhost:3000/users/signup", {
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
        <h1 className="text-xl  ">Passo 2 de 3</h1>

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
          <label className="text-start text-lg mt-2 mb-2">CPF</label>
          <input
            type="text"
            id="CPF"
            name="CPF"
            value={cpf}
            onChange={(e) => {
              const maskedCpf = cpfMask(e.target.value);
              setCpf(maskedCpf);
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
              Data de nascimento
            </label>
            <input
              type="date"
              id="date"
              name="date"
              onChange={(e) => {
                setDateNasc(e.target.value);
              }}
              placeholder="00/00/0000"
              className="border-2 border-deepGreen rounded-lg shadow-md p-3 pl-3  text-black  bg-LightGray w-full"
            />
          </div>
        </div>

        <div className="text-start text-lg mt-2 mb-2">
          <h1 className="text-green-900 text-2xl">Qual seu gênero?</h1>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="option1"
              name="generos"
              onChange={(e) => {
                setGender(e.target.value);
              }}
              value="Mulher"
              className="form-radio text-deepGreen border-2 border-deepGreen rounded"
            />
            <label htmlFor="Mulher" className="text-lg text-gray-700">
              Mulher
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="option2"
              name="generos"
              onChange={(e) => {
                setGender(e.target.value);
              }}
              value="Homem"
              className="form-radio text-deepGreen border-2 border-deepGreen rounded"
            />
            <label htmlFor="Homem" className="text-lg text-gray-700">
              Homem
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="option3"
              name="generos"
              onChange={(e) => {
                setGender(e.target.value);
              }}
              value="Outro"
              className="form-radio text-deepGreen border-2 border-deepGreen rounded"
            />
            <label htmlFor="Outro" className="text-lg text-gray-700">
              Outro
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="option3"
              name="generos"
              value="Prefiro Não Dizer"
              onChange={(e) => {
                setGender(e.target.value);
              }}
              className="form-radio text-deepGreen border-2 border-deepGreen rounded"
            />
            <label htmlFor="Prefiro não dize" className="text-lg text-gray-700">
              Prefiro não dizer
            </label>
          </div>
        </div>

        <div className="text-start text-lg mt-2 mb-2">
          <h1 className="text-green-900 text-2xl">
            Você é portador de alguma deficiência?
          </h1>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="option1"
              name="opcoes"
              onChange={(e) => {
                setDisablePerson(e.target.value);
              }}
              value="Sim"
              className="form-radio text-deepGreen border-2 border-deepGreen rounded"
            />
            <label htmlFor="Sim" className="text-lg text-gray-700">
              Sim
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="option2"
              name="opcoes"
              onChange={(e) => {
                setDisablePerson(e.target.value);
              }}
              value="Não"
              className="form-radio text-deepGreen border-2 border-deepGreen rounded"
            />
            <label htmlFor="Não" className="text-lg text-gray-700">
              Não
            </label>
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

export default RegisterTwo;
