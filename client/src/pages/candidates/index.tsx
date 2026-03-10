import MainCandidates from "@/components/candidates/mainCandidates";
import HeaderCompany from "@/components/home-page/headers/headerCompany";


const Candidates = () => {
  return (
    <>
        <header>
           <HeaderCompany/>
        </header>
      <main>
        <MainCandidates/>
      </main>
    </>
  );
};

export default Candidates;
