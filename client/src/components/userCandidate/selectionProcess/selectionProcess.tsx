import VagasProcess from "./vagasProcess";

export default function SelectionProcess() {
  return (
    <>
      <div className="flex flex-col p-8  md:p-36 lg:p-40 w-full bg-MediumGray max-w-6xl mx-auto font-SecondFont">
        <div className="grid justify-center gap-8">
          <VagasProcess
            name="AUXILIAR COMERCIAL"
            cidade="Cascavel - PR"
            postada="72"
            pcd={true}
            regime="Presencial"
            contratacao="CLT"
            salario="Não informado"
          />
          <VagasProcess
            name="AUXILIAR COMERCIAL"
            cidade="Cascavel - PR"
            postada="72"
            pcd={true}
            regime="Presencial"
            contratacao="CLT"
            salario="Não informado"
          />
          <VagasProcess
            name="AUXILIAR COMERCIAL"
            cidade="Cascavel - PR"
            postada="72"
            pcd={true}
            regime="Presencial"
            contratacao="CLT"
            salario="Não informado"
          />
          <VagasProcess
            name="AUXILIAR COMERCIAL"
            cidade="Cascavel - PR"
            postada="72"
            pcd={true}
            regime="Presencial"
            contratacao="CLT"
            salario="Não informado"
          />
        </div>
      </div>
    </>
  );
}
