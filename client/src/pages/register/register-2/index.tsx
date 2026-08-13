import HeaderLogin from "@/components/home-page/headers/header-login";
import RegisterTwo from "@/components/register/registerTwo";

const RegisterUserTwo = () => {
  return (
    <>
      <header>
        <HeaderLogin />
      </header>
      <main className="min-h-screen bg-gradient-to-br from-softGreen via-paleGreen to-softGreen">
        <div className="flex flex-col items-center justify-center px-4 py-12 sm:py-16">
          <div className="text-center mb-8 max-w-2xl">
            <p className="uppercase text-xs sm:text-sm tracking-[0.25em] text-mediumGreen font-SecondFont font-semibold mb-5">
              Cadastro de candidato
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-deepGreen font-PrimaryFont">
              Transformando o Agro
            </h1>
            <p className="text-lg text-gray-700 mt-4 font-SecondFont">
              Só mais um passo pra você entrar na plataforma
            </p>
          </div>

          <RegisterTwo />
        </div>
      </main>
    </>
  );
};

export default RegisterUserTwo;
