import MainCompanyProfile from "@/components/company/profile/mainCompanyProfile";
import SubHeader from "@/components/company/profile/subHeader";
import HeaderCompany from "@/components/home-page/headers/headerCompany";


const CompanyProfile = () => {
  return (
    <>
      <header><HeaderCompany/></header>
      <main>
        <SubHeader/>
        <MainCompanyProfile/>
      </main>
    </>
  );
};

export default CompanyProfile;
