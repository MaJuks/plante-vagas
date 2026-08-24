import { useState } from "react";
import { useNavigate } from "react-router";
import { Menu, X, Home, LogOut, User } from "lucide-react";
import logo from "../../../assets/images/logo.png";
import { clearSession } from "../../../services/api";

export default function HeaderCompany() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);

  const handleLogout = () => {
    clearSession();
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md py-3 px-4 sm:px-6 w-full fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between max-w-[1600px] mx-auto">
        <div className="flex justify-start">
          <img
            src={logo}
            alt="Logo"
            className="h-12 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Desktop nav */}
        <nav className="hidden sm:flex gap-10 text-deepGreen font-medium font-SecondFont items-center">
          <a onClick={() => navigate("/empresa")} className="hover:text-mediumGreen cursor-pointer transition-colors">
            PERFIL
          </a>
          <a onClick={() => navigate("/vagas-empresa")} className="hover:text-mediumGreen cursor-pointer transition-colors">
            VAGAS
          </a>
          <a onClick={() => navigate("/empresa/configuracoes")} className="hover:text-mediumGreen cursor-pointer transition-colors">
            CONFIGURAÇÕES
          </a>
        </nav>

        {/* Account dropdown */}
        <div className="hidden sm:block relative">
          <button
            onClick={() => setAccountMenuOpen(!accountMenuOpen)}
            className="flex items-center gap-2 bg-paleGreen text-deepGreen px-4 py-2 rounded-full
                       font-SecondFont font-medium text-sm hover:bg-mediumGreen hover:text-white
                       transition-all duration-200"
          >
            <User size={16} />
            Minha Conta
          </button>

          {accountMenuOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setAccountMenuOpen(false)} />
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 z-20 overflow-hidden">
                <button
                  onClick={() => { navigate("/"); setAccountMenuOpen(false); }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-paleGreen/50
                             transition-colors font-SecondFont text-sm"
                >
                  <Home size={16} className="text-deepGreen" />
                  Página Inicial
                </button>
                <div className="border-t border-gray-100" />
                <button
                  onClick={() => { handleLogout(); setAccountMenuOpen(false); }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50
                             transition-colors font-SecondFont text-sm"
                >
                  <LogOut size={16} />
                  Sair da conta
                </button>
              </div>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button className="sm:hidden p-2 rounded-lg hover:bg-paleGreen transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} className="text-deepGreen" /> : <Menu size={24} className="text-deepGreen" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="sm:hidden mt-2 flex flex-col items-center gap-2 text-deepGreen font-medium font-SecondFont bg-white py-4 rounded shadow">
          <a onClick={() => { navigate("/empresa"); setMenuOpen(false); }} className="hover:text-mediumGreen cursor-pointer w-full text-center py-2 transition-colors">
            PERFIL
          </a>
          <a onClick={() => { navigate("/vagas-empresa"); setMenuOpen(false); }} className="hover:text-mediumGreen cursor-pointer w-full text-center py-2 transition-colors">
            VAGAS
          </a>
          <a onClick={() => { navigate("/empresa/configuracoes"); setMenuOpen(false); }} className="hover:text-mediumGreen cursor-pointer w-full text-center py-2 transition-colors">
            CONFIGURAÇÕES
          </a>
          <div className="border-t border-gray-100 w-full my-1" />
          <button onClick={() => { navigate("/"); setMenuOpen(false); }} className="flex items-center gap-2 text-gray-700 py-2 font-SecondFont text-sm">
            <Home size={16} className="text-deepGreen" /> Página Inicial
          </button>
          <button onClick={handleLogout} className="flex items-center gap-2 text-red-600 py-2 font-SecondFont text-sm">
            <LogOut size={16} /> Sair da conta
          </button>
        </nav>
      )}
    </header>
  );
}
