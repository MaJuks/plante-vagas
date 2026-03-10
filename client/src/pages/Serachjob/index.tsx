import Footer from "@/components/home-page/footer/footer";
import Header from "@/components/home-page/headers/header";
import FilterBar from "@/components/searchJob/filterBar/filterBar";
import Vagas from "@/components/searchJob/jobs/vagas";

const SearchJobs = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <FilterBar />
        <br /> <br />
        <Vagas
          name="AUXILIAR COMERCIAL"
          cidade="Cascavel - PR"
          postada="72"
          pcd={true}
          regime="Presencial"
          contratacao="CLT"
          salario="Não informado"
          descricao="Buscamos um(a) Auxiliar Comercial para atuar no setor de agronegócio, prestando suporte às atividades de vendas e atendimento ao cliente. Este(a) profissional será responsável por gerenciar cadastros de clientes, auxiliar no preparo de propostas comerciais e dar suporte logístico nas operações de entrega."
          imagem="empresas.png"
        />
        <br /> <br />
        <Vagas
          name="AUXILIAR COMERCIAL"
          cidade="Cascavel - PR"
          postada="72"
          pcd={true}
          regime="Presencial"
          contratacao="CLT"
          salario="Não informado"
          descricao="Buscamos um(a) Auxiliar Comercial para atuar no setor de agronegócio, prestando suporte às atividades de vendas e atendimento ao cliente. Este(a) profissional será responsável por gerenciar cadastros de clientes, auxiliar no preparo de propostas comerciais e dar suporte logístico nas operações de entrega."
          imagem="empresas.png"
        />
        <br /> <br />
        <Vagas
          name="AUXILIAR COMERCIAL"
          cidade="Cascavel - PR"
          postada="72"
          pcd={true}
          regime="Presencial"
          contratacao="CLT"
          salario="Não informado"
          descricao="Buscamos um(a) Auxiliar Comercial para atuar no setor de agronegócio, prestando suporte às atividades de vendas e atendimento ao cliente. Este(a) profissional será responsável por gerenciar cadastros de clientes, auxiliar no preparo de propostas comerciais e dar suporte logístico nas operações de entrega."
          imagem="empresas.png"
        />
        <br />
        <p className="flex justify-center font-SecondFont text-deepGreen">
          {" "}
          VER MAIS VAGAS
        </p>
      </main>
      <br />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default SearchJobs;
