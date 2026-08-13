import { useNavigate } from "react-router-dom";
import { useRegister } from "./RegisterContext";
import { useEffect, useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleNext();
      }}
      className="w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-xl
               border border-white/50 font-SecondFont text-gray-800"
    >
      <div className="text-center mb-8">
        <p className="uppercase text-xs tracking-[0.2em] text-mediumGreen font-semibold mb-3">
          Passo 1 de 2
        </p>
        <h2 className="text-2xl font-bold text-deepGreen font-PrimaryFont">Crie sua conta</h2>
        <p className="text-gray-600 mt-2">Comece com seu e-mail e uma senha</p>
      </div>

      <div className="space-y-5">
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            E-mail
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Mail size={20} aria-hidden="true" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              placeholder="seu@email.com"
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl
                       text-gray-800 placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-mediumGreen focus:border-transparent
                       transition-all duration-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Senha
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Lock size={20} aria-hidden="true" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              autoComplete="new-password"
              aria-describedby="password-rules"
              placeholder="Insira sua senha"
              className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-xl
                       text-gray-800 placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-mediumGreen focus:border-transparent
                       transition-all duration-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600
                       transition-colors duration-200"
              aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              aria-pressed={showPassword}
            >
              {showPassword ? <EyeOff size={20} aria-hidden="true" /> : <Eye size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Confirm Password Field */}
        <div>
          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-2">
            Confirme a senha
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Lock size={20} aria-hidden="true" />
            </div>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              name="confirm-password"
              autoComplete="new-password"
              placeholder="Repita sua senha"
              className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-xl
                       text-gray-800 placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-mediumGreen focus:border-transparent
                       transition-all duration-300"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600
                       transition-colors duration-200"
              aria-label={showConfirmPassword ? "Ocultar senha" : "Mostrar senha"}
              aria-pressed={showConfirmPassword}
            >
              {showConfirmPassword ? <EyeOff size={20} aria-hidden="true" /> : <Eye size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Password Rules */}
        <div id="password-rules" className="bg-gray-50 border border-gray-200 rounded-xl p-4">
          <ul className="list-none space-y-1 text-sm text-gray-600">
            <li>• Mínimo de 8 dígitos.</li>
            <li>• Pelo menos uma letra maiúscula.</li>
            <li>• Pelo menos um número.</li>
          </ul>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-deepGreen text-white
                   py-4 rounded-xl font-semibold text-lg
                   hover:bg-mediumGreen transition-colors duration-300"
        >
          PRÓXIMO
          <ArrowRight size={20} aria-hidden="true" />
        </button>
      </div>
    </form>
  );
};

export default RegisterOne;
