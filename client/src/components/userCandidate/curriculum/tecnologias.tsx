import AgroSectionForm from "./agroSectionForm";

const TECNOLOGIA_OPTIONS = [
  { value: "agricultura_precisao", label: "Agricultura de precisão" },
  { value: "gps_piloto_automatico", label: "GPS / piloto automático" },
  { value: "drones_agricolas", label: "Drones agrícolas" },
  { value: "sensoriamento_remoto", label: "Sensoriamento remoto" },
  { value: "softwares_gestao_agricola", label: "Softwares de gestão agrícola" },
  { value: "irrigacao_automatizada", label: "Irrigação automatizada" },
  { value: "outro", label: "Outro" },
];

export default function Tecnologias() {
  return (
    <AgroSectionForm
      section="tecnologias"
      title="Adicione as tecnologias agrícolas que você domina"
      addLabel="Adicionar tecnologia"
      nameLabel="Tecnologia"
      entityLabel="tecnologia"
      nameOptions={TECNOLOGIA_OPTIONS}
    />
  );
}
