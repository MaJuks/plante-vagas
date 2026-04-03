import { useNavigate } from "react-router-dom";
import { useRegister } from "./RegisterContext";
import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { hashPassword } from "../../utils/hashPassword";

const RegisterOne = () => {
  const navigate = useNavigate();
  const { updateFormData } = useRegister();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [validPassowrd, setValidPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validatePassoword = (pwd: string) => {
    const hasMinLength = pwd.length >= 8;
    const hasUpperCase = /[A-Z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    return hasMinLength && hasUpperCase && hasNumber;
  };

  useEffect(() => {
    if ((!password && !confirmPassword) || !email) {
      setError("Preecnha todos os campos");
      setValidPassword(false);
      return;
    }
    if (!validatePassoword(password)) {
      setError(
        "A senha deve ter no mínimo 8 caracteres, incluir uma letra maiúscula e um número."
      );
      setValidPassword(false);
      return;
    }
    if (password !== confirmPassword) {
      setError("As senhas não coicidem");
      setValidPassword(false);
      return;
    }

    setError("");
    setValidPassword(true);
  }, [password, confirmPassword, email]);

  const handleNext = () => {
    if (!validPassowrd) {
      toast.error("Erro ao validar as informações", {
        description: error,
        duration: 3000,
      });
    } else {
      const hashedPassword = hashPassword(password);
      updateFormData({ email, password: hashedPassword });
      navigate("/register-2");
    }
  };

  return (
    <>
      <div className="grid bg-white p-6 sm:p-12 rounded-lg shadow-md font-SecondFont max-w-full sm:w-[700px] mx-auto">
        <h1 className="text-xl  ">Passo 1 de 3</h1>

        <div className="grid mt-6 mb-3">
          <label htmlFor="email" className="text-start text-lg mt-2 mb-2">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Insira seu E-mail aqui."
            className="border-2 border-deepGreen rounded-lg shadow-md p-3 pl-3  text-black bg-LightGray"
            required
          />
        </div>

        <div className="grid mt-3 mb-6">
          <label className="text-start text-lg mt-2 mb-2">Senha</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Insira sua senha aqui."
              className="border-2 border-deepGreen rounded-lg shadow-md p-3 pl-3 text-black bg-LightGray w-full pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        <div className="grid mt-3 mb-6">
          <label className="text-start text-lg mt-2 mb-2">
            Confirme a senha
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="password"
              name="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Insira sua senha aqui."
              className="border-2 border-deepGreen rounded-lg shadow-md p-3 pl-3 text-black bg-LightGray w-full pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
              tabIndex={-1}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg ">
          <p className="text-green-900">• Mínimo de 8 dígitos.</p>
          <p className="text-green-900">• Pelo menos uma letra maiúscula.</p>
          <p className="text-green-900">• Pelo menos um número.</p>
        </div>

        <div className="grid justify-center">
          <button
            onClick={handleNext}
            type="submit"
            className="w-80 h-14 bg-deepGreen text-lg sm:text-xl text-white px-2 sm:px-4 py-1 sm:py-1 rounded-lg hover:bg-mediumGreen font-SecondFont mt-12 mb-4"
          >
            PRÓXIMO
          </button>
        </div>
      </div>
    </>
  );
};

export default RegisterOne;
