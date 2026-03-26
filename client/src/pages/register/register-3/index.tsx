import HeaderLogin from "@/components/home-page/headers/header-login";
import RegisterThree from "@/components/register/registerThree";

const RegisterUserThree = () => {
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
        <RegisterThree />

        <h1 className="text-center text-2xl m-12 cursor-pointer text-deepGreen underline"></h1>
      </main>
    </>
  );
};

export default RegisterUserThree;
