import HeaderLogin from "@/components/home-page/headers/header-login";
import Loginform from "@/components/login-area/loginform";
import { useNavigate } from "react-router-dom";
import { Building2, User, ArrowRight } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const handleCompanyRegister = () => {
    navigate("/register-company");
  };

  const handleUserRegister = () => {
    navigate("/register");
  };

  return (
    <>
      <header>
        <HeaderLogin />
      </header>
      <main className="min-h-screen bg-gradient-to-br from-softGreen via-paleGreen to-softGreen">
        <div className="flex flex-col items-center justify-center px-4 py-12 sm:py-16">
          {/* Header Section */}
          <div className="text-center mb-8 max-w-2xl">
            <p className="uppercase text-xs sm:text-sm tracking-[0.25em] text-mediumGreen font-SecondFont font-semibold mb-5">
              Acesse sua conta
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-deepGreen font-PrimaryFont">
              Transformando o Agro
            </h1>
            <p className="text-lg text-gray-700 mt-4 font-SecondFont">
              Entre na plataforma e conecte-se às melhores oportunidades
            </p>
          </div>

          {/* Login Form */}
          <Loginform />

          {/* Register Section */}
          <div className="mt-12 text-center max-w-2xl">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <h2 className="text-2xl text-deepGreen font-PrimaryFont mb-2">
                Ainda não possui cadastro?
              </h2>
              <p className="text-gray-600 font-SecondFont mb-6">
                Escolha como deseja se cadastrar na plataforma
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleCompanyRegister}
                  className="group flex items-center justify-center gap-3 bg-deepGreen text-white
                           px-6 py-4 rounded-xl font-SecondFont font-semibold
                           hover:bg-mediumGreen transition-colors duration-300"
                >
                  <Building2 size={20} aria-hidden="true" />
                  <span>Sou Empresa</span>
                  <ArrowRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={handleUserRegister}
                  className="group flex items-center justify-center gap-3 border-2 border-deepGreen
                           text-deepGreen px-6 py-4 rounded-xl font-SecondFont font-semibold
                           hover:bg-deepGreen hover:text-white transition-colors duration-300"
                >
                  <User size={20} aria-hidden="true" />
                  <span>Sou Candidato</span>
                  <ArrowRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
