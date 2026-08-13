import HeaderCompany from "@/components/home-page/headers/headerCompany";
import CompanySettingsForm from "@/components/company/profile/companySettingsForm";

const CompanySettings = () => {
  return (
    <>
      <header>
        <HeaderCompany />
      </header>
      <main>
        <CompanySettingsForm />
      </main>
    </>
  );
};

export default CompanySettings;
