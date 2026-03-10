const Footer = () => {
  return (
    <footer className="bg-oliveGreen flex justify-center p-18">
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center md:items-start px-6 sm:px-12 md:px-16 lg:px-24 xl:px-36 gap-12 md:gap-24">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2 font-SecondFont">
          <div>Rua Dolores Florenzano Vidal, Vila Nunes - Lorena/SP</div>
          <div>TELEFONE: (11) 9898-9293</div>
          <div>WHATSAPP: (11) 9898-9293</div>
          <div>EMAIL: plantio@contato.com</div>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2 font-SecondFont">
          <span className="font-bold">ACESSO RÁPIDO</span>
          <a className="underline" href="#">
            Home
          </a>
          <a className="underline" href="#">
            Quem somos
          </a>
          <a className="underline" href="#">
            Serviço
          </a>
          <a className="underline" href="#">
            Vagas
          </a>
          <a className="underline" href="#">
            Contato
          </a>
        </div>

        <div className="flex flex-col items-center w-full md:w-auto gap-4 px-6">
          <div className="text-center md:text-left">
            Receba informações do lançamento de vagas e cadastro de currículos
          </div>
          <input
            type="text"
            placeholder="Insira seu Email"
            className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-700  text-center"
          />
          <button className="w-full bg-deepGreen text-white px-6 py-3 rounded-lg hover:bg-green-900 text-lg font-semibold">
            INSCREVER-SE
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
