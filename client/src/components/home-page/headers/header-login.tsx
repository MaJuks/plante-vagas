import { useNavigate } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import logo from "../../../assets/images/logo.png";

const HeaderLogin = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button
          className="flex items-center cursor-pointer group"
          onClick={() => navigate("/home")}
          aria-label="Ir para o início"
        >
          <img
            src={logo}
            alt="Plante Vagas"
            className="h-12 transition-transform duration-300 group-hover:scale-105"
          />
        </button>

        {/* Navigation */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-deepGreen
                     transition-colors duration-300 font-SecondFont text-sm"
            aria-label="Voltar"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            <span className="hidden sm:inline">Voltar</span>
          </button>

          <button
            onClick={() => navigate("/home")}
            className="flex items-center gap-2 bg-paleGreen text-deepGreen
                     px-4 py-2 rounded-full hover:bg-softGreen
                     transition-all duration-300 font-SecondFont text-sm font-medium"
            aria-label="Ir para a página inicial"
          >
            <Home size={16} aria-hidden="true" />
            <span className="hidden sm:inline">Ir para Home</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderLogin;
