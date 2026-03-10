import { useNavigate } from "react-router";

import logo from "../../../assets/images/logo.png";

export default function Header() {
  const navigate = useNavigate();
  const HandleLoginClick = () => {
    navigate("/login");
  };
  return (
    <header className="bg-white shadow-md py-3 px-6 w-full">
      <div className="w-full flex items-center justify-between max-w-[1600px] mx-auto">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-14"
            style={{ cursor: "pointer" }}
          />
        </div>

        <nav
          className="hidden md:flex space-x-6 text-deepGreen font-medium ml-14 font-SecondFont"
          style={{ cursor: "pointer" }}
        >
          <a onClick={() => navigate("/home")} className="hover:text-green-700">
            HOME
          </a>
          <a href="#" className="hover:text-green-700">
            SOBRE O AGRO
          </a>
          <a href="#" className="hover:text-green-700">
            SERVIÇO
          </a>
          <a href="#" className="hover:text-green-700">
            VAGAS
          </a>
          <a href="#" className="hover:text-green-700">
            CONTATO
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-green-800 text-white flex items-center justify-center rounded-full">
            <i className="fas fa-user"></i>
          </div>
          <button
            onClick={HandleLoginClick}
            className="text-deepGreen font-medium hover:underline font-SecondFont"
          >
            FAZER LOGIN
          </button>
        </div>
      </div>
    </header>
  );
}
