import AgroSectionForm from "./agroSectionForm";

const OPERACAO_FLORESTAL_OPTIONS = [
  { value: "plantio_florestal", label: "Plantio florestal" },
  { value: "corte_colheita_madeira", label: "Corte / colheita de madeira" },
  { value: "manejo_florestal", label: "Manejo florestal" },
  { value: "viveiro_florestal", label: "Viveiro florestal" },
  { value: "controle_pragas_florestais", label: "Controle de pragas florestais" },
  { value: "outro", label: "Outro" },
];

export default function OperacaoFlorestal() {
  return (
    <AgroSectionForm
      section="operacoesFlorestais"
      title="Adicione as operações florestais que você domina"
      addLabel="Adicionar operação florestal"
      nameLabel="Operação florestal"
      entityLabel="operação florestal"
      nameOptions={OPERACAO_FLORESTAL_OPTIONS}
    />
  );
}
