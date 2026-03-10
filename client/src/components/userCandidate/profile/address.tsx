import SubHeader from "../../home-page/headers/subHeader";

export default function Address() {
  return (
    <>
      <div className="flex flex-col p-8  md:p-36 lg:p-40 w-full bg-MediumGray max-w-6xl mx-auto font-SecondFont">
        <SubHeader />

        <h1 className="text-xl my-4">Endereço</h1>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-DeepGray">
          <div className="flex flex-col w-full md:w-1/4">
            <label>CEP: </label>
            <input
              type="text"
              disabled
              value="85819-740"
              className="w-full border-1 rounded-sm mt-1 p-1 pl-4"
            />
          </div>
          <div className="flex flex-col w-full md:w-2/4">
            <label>Logradouro: </label>
            <input
              type="text"
              disabled
              value="Rua Lapa"
              className="w-full border-1 rounded-sm mt-1 p-1 pl-4"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/4">
            <label>Número: </label>
            <input
              type="text"
              disabled
              value="544"
              className="w-full border-1 rounded-sm mt-1 p-1 pl-4"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-DeepGray mt-4">
          <div className="flex flex-col w-full md:w-1/3">
            <label>Bairro:</label>
            <input
              type="text"
              disabled
              value="85819-740"
              className="w-full border-1 rounded-sm mt-1 p-1 pl-4"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/3">
            <label>Complemento:</label>
            <input
              type="text"
              disabled
              value="Rua Lapa"
              className="w-full border-1 rounded-sm mt-1 p-1 pl-4"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/3">
            <label>Cidade: </label>
            <input
              type="text"
              disabled
              value="544"
              className="w-full border-1 rounded-sm mt-1 p-1 pl-4"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-DeepGray mt-4">
          <div className="flex flex-col w-full md:w-1/2">
            <label>País:</label>
            <input
              type="text"
              disabled
              value="Brasil"
              className="w-full border-1 rounded-sm mt-1 p-1 pl-4"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <label>Estado: </label>
            <input
              type="text"
              disabled
              value="São Paulo"
              className="w-full border-1 rounded-sm mt-1 p-1 pl-4"
            />
          </div>
        </div>
      </div>
    </>
  );
}
