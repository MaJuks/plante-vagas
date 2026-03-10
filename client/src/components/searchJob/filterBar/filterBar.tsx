const FilterBar = () => {
  return (
    <>
      <div className="bg-blueSky w-full py-12 flex justify-center">
        <section className="bg-softGreen p-8 sm:p-14 rounded-lg shadow-md max-w-5x1">
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
            <select className="border p-4  shadow-sm w-full sm:w-auto min-w-[150px] bg-white">
              <option> Todas as regiões </option>
              <option> Toledo - PR </option>
              <option> Cascavel - PR </option>
              <option> Maringa - PR </option>
              <option> Palotina - PR </option>
              <option> Santa Tereza - PR </option>
            </select>

            <select className="border p-4  shadow-sm w-full sm:w-auto min-w-[150px] bg-white">
              <option> Todas as áreas </option>
              <option> TI e Desenvolvimento </option>
              <option> Administração e Finanças </option>
              <option> Marketing e Comunicação </option>
              <option> Engenharia </option>
              <option> Vendas e Atendimento </option>
              <option> Produção Agrícola </option>
              <option> Zootecnia e Pecuária </option>
              <option> Comercial e Logística </option>
              <option> Pesquisa e Tecnologia no Agro </option>
              <option> Sustentabilidade e Meio Ambiente </option>
            </select>

            <select className="border p-4  shadow-sm w-full sm:w-auto min-w-[150px] bg-white">
              <option> Todas as Modalidades </option>
              <option> Presencial </option>
              <option> Híbrido </option>
              <option> Remoto </option>
              <option> Freelancer </option>
              <option> Temporário </option>
            </select>

            <button className="bg-deepGreen text-white px-4 py-2 rounded-md shadow w-full sm:w-auto hover:bg-mediumGreen">
              {" "}
              FILTRAR{" "}
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default FilterBar;
