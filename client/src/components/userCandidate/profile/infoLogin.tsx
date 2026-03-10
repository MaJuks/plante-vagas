import SubHeader from "../../home-page/headers/subHeader";

export default function InfoLogin() {
  return (
    <>
      <div className="flex flex-col p-8  md:p-36 lg:p-40 w-full bg-MediumGray max-w-6xl mx-auto font-SecondFont">
        <SubHeader />

        <div className="flex flex-col text-DeepGray mt-4">
          <div className="flex flex-col my-4">
            <label>Email:</label>
            <input
              type="text"
              disabled
              value="igorgoncalvesmarcolintenorio@gmail.com"
              className="w-full md:w-3/4 lg:w-2/3 border-1 rounded-sm mt-1 p-1 pl-4"
            />
            <button className="underline text-left mt-2 cursor-pointer text-deepGreen w-fit">
              Alterar Email
            </button>
          </div>

          <div className="flex flex-col my-2">
            <label>Senha:</label>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 md:gap-8">
              <input
                type="text"
                disabled
                value="**************"
                className="w-full sm:w-1/2 md:w-2/5 border-1 rounded-sm mt-1 p-1 pl-4"
              />
              <span className="text-sm mt-1 sm:mt-0">
                Ultima Troca a 3 meses.
              </span>
            </div>
            <button className="underline text-left mt-2 cursor-pointer text-deepGreen w-fit">
              Alterar Senha
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
