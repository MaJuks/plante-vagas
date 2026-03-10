import HeaderLogin from "@/components/home-page/headers/header-login";
import Loginform from "@/components/login-area/loginform";
import { useNavigate } from "react-router-dom";

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
      <main className="bg-softGreen grid justify-center">
        <div className="grid justify-center p-6 sm:p-12 md:p-24 max-w-screen-lg w-full">
          <h1 className="text-3xl sm:text-4xl md:text-4xl text-deepGreen font-PrimaryFont text-left">
            Transformando o Agro
          </h1>
        </div>
        <Loginform />

        <div className="text-center text-deepGreen m-12">
          <h1 className="text-2xl mb-6">Ainda não possui um cadastro?</h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleCompanyRegister}
              className="bg-deepGreen text-white px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition"
            >
              Cadastrar como Empresa
            </button>
            <button
              onClick={handleUserRegister}
              className="border-2 border-deepGreen text-deepGreen px-6 py-3 rounded-xl font-semibold hover:bg-deepGreen hover:text-white transition"
            >
              Cadastrar como Usuário
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
