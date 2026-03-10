import { useState, useEffect } from "react";
import { Link2, Bookmark, BookmarkCheck, Briefcase, Building2, Check } from "lucide-react";
import { toast } from "sonner";
import JobInformation from "../company-job-infomation/job-information";
import CompanyInfoPage from "../company-job-infomation/enterprise";

const MainJobPage = () => {
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("vaga");

  const toggleBookmark = () => {
    const newSavedState = !saved;
    setSaved(newSavedState);

    if (newSavedState) {
      toast.success("Vaga salva!", {
        description: "Adicionada à sua lista de vagas salvas",
        duration: 3000,
      });
    } else {
      toast.info("Vaga removida", {
        description: "Removida da sua lista de vagas salvas",
        duration: 3000,
      });
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    toast.success("Link copiado!", {
      description: "Link da vaga copiado para a área de transferência",
      duration: 2000,
    });
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const tabs = [
    { id: "vaga", label: "Vaga", icon: Briefcase },
    { id: "empresa", label: "Empresa", icon: Building2 },
  ];

  return (
    <section className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="p-6 sm:p-8 border-b border-gray-100">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-deepGreen font-PrimaryFont">
            AUXILIAR COMERCIAL
          </h1>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={copyLink}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-SecondFont text-sm font-medium
                       transition-all duration-300 ${
                         copied
                           ? "bg-green-100 text-green-700"
                           : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                       }`}
            >
              {copied ? <Check size={18} /> : <Link2 size={18} />}
              {copied ? "Copiado!" : "Copiar link"}
            </button>

            <button
              onClick={toggleBookmark}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-SecondFont text-sm font-medium
                       transition-all duration-300 ${
                         saved
                           ? "bg-deepGreen text-white"
                           : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                       }`}
            >
              {saved ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
              {saved ? "Salvo" : "Salvar"}
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 sm:px-8 pt-4 border-b border-gray-100">
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-t-xl font-SecondFont font-medium
                       transition-all duration-300 relative ${
                         activeTab === tab.id
                           ? "bg-paleGreen text-deepGreen"
                           : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                       }`}
            >
              <tab.icon size={18} />
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-deepGreen" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        {activeTab === "vaga" ? <JobInformation /> : <CompanyInfoPage />}
      </div>
    </section>
  );
};

export default MainJobPage;
