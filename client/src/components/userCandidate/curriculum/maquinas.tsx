import AgroSectionForm from "./agroSectionForm";

const MAQUINA_OPTIONS = [
  { value: "trator", label: "Trator" },
  { value: "colheitadeira", label: "Colheitadeira" },
  { value: "pulverizador", label: "Pulverizador" },
  { value: "plantadeira", label: "Plantadeira" },
  { value: "semeadora", label: "Semeadora" },
  { value: "rocadeira", label: "Roçadeira" },
  { value: "caminhao_carreta_agricola", label: "Caminhão / carreta agrícola" },
  { value: "outro", label: "Outro" },
];

export default function Maquinas() {
  return (
    <AgroSectionForm
      section="maquinas"
      title="Adicione as máquinas que você sabe operar"
      addLabel="Adicionar máquina"
      nameLabel="Máquina"
      entityLabel="máquina"
      nameOptions={MAQUINA_OPTIONS}
    />
  );
}
