import { Save, Trash2 } from "lucide-react";
import { useState } from "react";

export default function Differentiate() {
  const adjetivos = [
    // Positivos
    "Comunicativo",
    "Proativo",
    "Organizado",
    "Pontual",
    "Responsável",
    "Criativo",
    "Dedicado",
    "Colaborativo",
    "Empático",
    "Focado",
    "Resiliente",
    "Inovador",
    "Comprometido",
    "Motivado",
    "Líder",
    "Versátil",
    "Curioso",
    "Analítico",
    "Paciente",
    "Adaptável",

    // Negativos ou pontos de atenção
    "Ansioso",
    "Perfeccionista",
    "Teimoso",
    "Impulsivo",
    "Distraído",
    "Crítico demais",
    "Introvertido",
    "Lento para decisões",
    "Dependente de validação",
    "Evita conflitos",

    // Neutros/contextuais
    "Cauteloso",
    "Observador",
    "Sincero",
    "Reservado",
    "Pragmático",
  ];

  const [selecionados_1, setSelecionados_1] = useState<string[]>([]);
  const [selecionados_2, setSelecionados_2] = useState<string[]>([]);

  const toggleSelecionado = (adj: string) => {
    setSelecionados_1((prev) =>
      prev.includes(adj) ? prev.filter((a) => a !== adj) : [...prev, adj]
    );
  };
  const toggleSelecionado2 = (adj: string) => {
    setSelecionados_2((prev) =>
      prev.includes(adj) ? prev.filter((a) => a !== adj) : [...prev, adj]
    );
  };
  return (
    <>
      <div className="flex flex-col p-8  md:p-36 lg:p-40 w-full bg-MediumGray max-w-6xl mx-auto font-SecondFont">
        <hr className="mb-6" />

        <h1 className="text-xl mb-6">
          Escreva características com base na sua personalidade, para que os
          empregadores conheçam melhor o seu perfil
        </h1>

        <h1 className="text-xl mb-4">Quais características você tem:</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
          {adjetivos.map((adj, index) => {
            const isSelected = selecionados_1.includes(adj);
            return (
              <button
                key={index}
                onClick={() => toggleSelecionado(adj)}
                className={`p-2 border border-deepGreen cursor-pointer transition rounded
                      ${
                        isSelected
                          ? "bg-oliveGreen"
                          : "bg-paleGreen hover:bg-oliveGreen"
                      }`}
              >
                {adj}
              </button>
            );
          })}
        </div>

        <div className="flex justify-end gap-3 mb-10">
          <button className="text-deepGreen cursor-pointer">
            <Save />
          </button>
          <button className="text-red-900 cursor-pointer">
            <Trash2 />
          </button>
        </div>

        <h1 className="text-xl mb-4">
          Quais características as pessoas acham que você deveria ter:
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
          {adjetivos.map((adj, index) => {
            const isSelected = selecionados_2.includes(adj);
            return (
              <button
                key={index}
                onClick={() => toggleSelecionado2(adj)}
                className={`p-2 border border-deepGreen cursor-pointer transition rounded
                      ${
                        isSelected
                          ? "bg-oliveGreen"
                          : "bg-paleGreen hover:bg-oliveGreen"
                      }`}
              >
                {adj}
              </button>
            );
          })}
        </div>

        <div className="flex justify-end gap-3 mb-10">
          <button className="text-deepGreen cursor-pointer">
            <Save />
          </button>
          <button className="text-red-900 cursor-pointer">
            <Trash2 />
          </button>
        </div>
      </div>
    </>
  );
}
