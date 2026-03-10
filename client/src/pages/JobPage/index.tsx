import Footer from "@/components/home-page/footer/footer";
import Header from "@/components/home-page/headers/header";
import MainJobPage from "@/components/JobPage/mainJobPage/mainJobpage";
import { Facebook, Instagram, Linkedin, Globe } from "lucide-react";
import logoEmpresa from "../../assets/images/empresas.png";

const JobPage = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="w-full bg-[#005C33] flex justify-center">
          <img
            className=""
            // src={require(`../assets/img-vaga.png`)}
            src={logoEmpresa}
            alt="Logo da empresa"
          />
        </div>

        <br />
        <br />
        <br />
        <br />
        <MainJobPage />
      </main>

      <br />
      <br />
      <br />
      <hr className="my-2 border-black max-w-[1000px] mx-auto" />
      <br />

      <div className="max-w-[1000px] mx-auto flex items-start">
        <p className="text-deepGreen font-PrimaryFont text-lg sm:text-lg md:text-xl">
          REDES SOCIAIS DA EMPRESA
        </p>
        <br />
      </div>
      <br />
      <div className="max-w-[1000px] mx-auto flex items-start gap-x-8">
        <Facebook size={24} />
        <Instagram size={24} />
        <Linkedin size={24} />
        <Globe size={24} />
      </div>
      <br />
      <br />

      <Footer />
    </>
  );
};

export default JobPage;
