import Footer from "@/components/home-page/footer/footer";
import Header from "@/components/home-page/headers/header";
import MainJobPage from "@/components/JobPage/mainJobPage/mainJobpage";
import { Facebook, Instagram, Linkedin, Globe, ArrowLeft, Building2, MapPin, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logoEmpresa from "../../assets/images/empresas.png";

const JobPage = () => {
  const navigate = useNavigate();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: Globe, href: "#", label: "Website", color: "hover:bg-gray-600" },
  ];

  return (
    <>
      <Header />

      <main className="pt-20 min-h-screen bg-gray-50">
        {/* Hero Banner */}
        <div className="relative bg-gradient-to-br from-deepGreen via-mediumGreen to-deepGreen">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-white/80 hover:text-white mb-8
                       transition-colors duration-300 font-SecondFont text-sm"
            >
              <ArrowLeft size={18} />
              Voltar para vagas
            </button>

            {/* Company Card */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-28 h-28 bg-white rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
                <img
                  src={logoEmpresa}
                  alt="Logo da empresa"
                  className="w-full h-full object-contain p-3"
                />
              </div>
              <div className="text-center md:text-left">
                <span className="inline-flex items-center gap-2 bg-white/20 text-white px-3 py-1 rounded-full text-xs font-SecondFont mb-3">
                  <Building2 size={14} />
                  Agronegócio
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-PrimaryFont">
                  Nome da Empresa
                </h1>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-3 text-white/80 font-SecondFont text-sm">
                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    Cascavel - PR
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={16} />
                    Postada há 2 horas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <MainJobPage />

          {/* Social Links Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-deepGreen font-PrimaryFont mb-6">
              Redes Sociais da Empresa
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-xl
                           font-SecondFont font-medium transition-all duration-300
                           hover:text-white hover:shadow-lg ${social.color}`}
                >
                  <social.icon size={20} />
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default JobPage;
