import CandidateResumeView from "@/components/candidates/candidateResumeView";
import HeaderCompany from "@/components/home-page/headers/headerCompany";

const CandidateCurriculo = () => {
  return (
    <>
      <header>
        <HeaderCompany />
      </header>
      <main>
        <CandidateResumeView />
      </main>
    </>
  );
};

export default CandidateCurriculo;
