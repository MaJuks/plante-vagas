const aboutCompany = [
  {
    id: 1,
    title: "SOBRE A EMPRESA",
    content: [
      "A Afubra, ou Associação dos Produtores de Algodão do Brasil, é uma entidade que representa os interesses dos produtores de algodão no país. Fundada com o objetivo de promover o desenvolvimento do setor, a Afubra atua em diversas frentes, incluindo a defesa de políticas públicas, a realização de pesquisas e o fomento à capacitação dos agricultores.",
      "A associação busca fortalecer a cadeia produtiva do algodão, promovendo a troca de conhecimentos e inovações entre os produtores. A Afubra foi fundada para atender às demandas dos produtores de algodão, um dos pilares do agronegócio brasileiro. Com sede em Goiás, a associação atua como uma voz unificada para os agricultores, promovendo o fortalecimento do setor.",
    ],
  },
];

const companyValues = [
  {
    id: 2,
    title: "VALORES DA EMPRESA",
    content: [
      {
        label: "Defesa de Interesses",
        description:
          "A Afubra trabalha ativamente na representação dos produtores junto a órgãos governamentais e na promoção de legislações que favoreçam o setor do algodão.",
      },
      {
        label: "Pesquisa e Desenvolvimento",
        description:
          "A associação colabora com instituições de pesquisa para fomentar inovações que possam beneficiar a produção de algodão, incluindo resistência a pragas e melhorias na qualidade do produto.",
      },
      {
        label: "Capacitação",
        description:
          "A Afubra realiza cursos, workshops e treinamentos para atualizar os produtores sobre novas práticas agrícolas, tecnologias e tendências do mercado.",
      },
      {
        label: "Promoção e Marketing",
        description:
          "A Afubra promove campanhas para valorizar o algodão brasileiro, destacando sua qualidade e incentivando o consumo tanto no mercado interno quanto externo.",
      },
      {
        label: "Networking",
        description:
          "A associação proporciona um espaço para que os produtores se conectem, troquem experiências e formem parcerias, o que é essencial em um setor tão colaborativo como o agronegócio.",
      },
    ],
  },
];

const joinCompany = [
  {
    id: 3,
    title: "JUNTE-SE À AFUBRA",
    content: [
      "Se você é apaixonado pelo agronegócio e deseja fazer parte de uma equipe que valoriza a inovação e a sustentabilidade, a Afubra é o lugar certo para você. Estamos sempre em busca de talentos que queiram contribuir para o desenvolvimento do setor do algodão no Brasil. Se você tem habilidades e ideias para fazer a diferença, candidate-se e venha fazer parte da nossa missão!",
    ],
  },
];

const CompanyInfoPage = () => {
  return (
    <div className="w-full p-4">
      {/* Sobre a Empresa */}
      <section className="mb-6">
        {aboutCompany.map((item, index) => (
          <div key={index}>
            <p className="text-deepGreen font-PrimaryFont text-lg sm:text-lg md:text-xl font-bold mb-2">
              {item.title}
            </p>
            {item.content.map((paragraph, key) => (
              <p
                key={key}
                className="font-SecondFont leading-relaxed tracking-wide first-line-indent"
              >
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </section>

      {/* Valores da Empresa */}
      <section className="mb-6">
        {companyValues.map((item, index) => (
          <div key={index}>
            <p className="text-deepGreen font-PrimaryFont text-lg sm:text-lg md:text-xl font-bold mb-2">
              {item.title}
            </p>
            <ul className="list-disc pl-5">
              {item.content.map((value, key) => (
                <li key={key} className="font-SecondFont">
                  <strong>{value.label}:</strong> {value.description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Sessão Junte-se à empresa */}
      <section className="mb-6">
        {joinCompany.map((item, index) => (
          <div key={index}>
            <p className="text-deepGreen font-PrimaryFont text-lg sm:text-lg md:text-xl font-bold mb-2">
              {item.title}
            </p>
            {item.content.map((paragraph, key) => (
              <p
                key={key}
                className="font-SecondFont leading-relaxed tracking-wide first-line-indent"
              >
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </section>

      <div className="w-full flex justify-end">
        <button className="bg-deepGreen text-white px-4 py-2 rounded-md shadow hover:bg-green-700 md:w-auto self-start mt-8">
          CANDIDATAR-SE
        </button>
      </div>
    </div>
  );
};

export default CompanyInfoPage;
