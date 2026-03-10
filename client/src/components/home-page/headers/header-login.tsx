import { useNavigate } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import logo from "../../../assets/images/logo.png";

const HeaderLogin = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer group"
          onClick={() => navigate("/home")}
        >
          <img
            src={logo}
            alt="Logo"
            className="h-12 transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-deepGreen
                     transition-colors duration-300 font-SecondFont text-sm"
          >
            <ArrowLeft size={18} />
            <span className="hidden sm:inline">Voltar</span>
          </button>

          <button
            onClick={() => navigate("/home")}
            className="flex items-center gap-2 bg-paleGreen text-deepGreen
                     px-4 py-2 rounded-full hover:bg-softGreen
                     transition-all duration-300 font-SecondFont text-sm font-medium"
          >
            <Home size={16} />
            <span className="hidden sm:inline">Ir para Home</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderLogin;
