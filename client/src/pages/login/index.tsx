import HeaderLogin from "@/components/home-page/headers/header-login";
import Loginform from "@/components/login-area/loginform";
import { useNavigate } from "react-router-dom";
import { Building2, User, Leaf, ArrowRight } from "lucide-react";
import bgImage from "@/assets/images/bg-teste.jpg";

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
      <main className="min-h-screen bg-gradient-to-br from-softGreen via-paleGreen to-softGreen relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-deepGreen/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-mediumGreen/10 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 flex flex-col items-center justify-center px-4 py-12 sm:py-16">
          {/* Header Section */}
          <div className="text-center mb-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm text-deepGreen px-4 py-2 rounded-full text-sm font-SecondFont font-medium mb-6">
              <Leaf size={16} />
              Acesse sua conta
            </div>
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
                           hover:bg-mediumGreen transition-all duration-300
                           hover:shadow-lg hover:shadow-deepGreen/20 hover:scale-105"
                >
                  <Building2 size={20} />
                  <span>Sou Empresa</span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={handleUserRegister}
                  className="group flex items-center justify-center gap-3 border-2 border-deepGreen
                           text-deepGreen px-6 py-4 rounded-xl font-SecondFont font-semibold
                           hover:bg-deepGreen hover:text-white transition-all duration-300
                           hover:shadow-lg hover:scale-105"
                >
                  <User size={20} />
                  <span>Sou Candidato</span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
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
