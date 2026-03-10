import { FiPaperclip } from "react-icons/fi";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { useState } from "react";
import JobInformation from "../company-job-infomation/job-information";
import CompanyInfoPage from "../company-job-infomation/enterprise";

const MainJobPage = () => {
  const [saved, setSaved] = useState(false);
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTabe] = useState("vaga");

  const toggleBookmark = () => {
    const newSavedState = !saved;
    setSaved(newSavedState);

    if (newSavedState) {
      setMessage("Vaga adicionada a sua lista");
    } else {
      setMessage("Vaga removida da sua lista");
    }
  };

  setTimeout(() => {
    setMessage("");
  }, 3000);
  return (
    <>
      <section className="grid max-w-[1000px] mx-auto grid-cols-1 gap-4 p-4">
        <div className="flex justify-between mx-full font-PrimaryFont">
          <p className="font-bold text-deepGreen text-xl sm:text-2xl md:text-3xl">
            AUXILIAR COMERCIAL
          </p>
          <p className="underline inline-flex items-center text-base sm:text-lg md:text-xl space-x-2 ml-auto">
            <FiPaperclip className="mr-2" /> Copiar link
            <span className="ml-4 flex items-center" onClick={toggleBookmark}>
              {saved ? <FaBookmark /> : <FaRegBookmark />}
              {message && (
                <span className="ml-2 text-sm text-green-500 font-semibold">
                  {message}
                </span>
              )}
            </span>
          </p>
        </div>
        <br />
        <div className="flex font-SecondFont justify-start  w-full max-w-[200px] mx-full items-start">
          <button
            className={`px-4 py-2 rounded-md transition-colors mr-2 ${
              activeTab === "vaga"
                ? "bg-oliveGreen text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTabe("vaga")}
          >
            {" "}
            VAGA{" "}
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === "empresa"
                ? "bg-oliveGreen  text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTabe("empresa")}
          >
            {" "}
            EMPRESA{" "}
          </button>
        </div>

        <hr className="my-2 border-black max-w-[1000px] mx-auto w-full" />
        <div>
          {activeTab === "vaga" ? <JobInformation /> : <CompanyInfoPage />}
        </div>
      </section>
    </>
  );
};

export default MainJobPage;
