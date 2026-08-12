import AgroSectionForm from "./agroSectionForm";

const OPERACAO_AGRICOLA_OPTIONS = [
  { value: "plantio", label: "Plantio" },
  { value: "colheita", label: "Colheita" },
  { value: "pulverizacao", label: "Pulverização" },
  { value: "preparo_solo", label: "Preparo do solo" },
  { value: "irrigacao", label: "Irrigação" },
  { value: "adubacao", label: "Adubação / Fertilização" },
  { value: "colheita_mecanizada", label: "Colheita mecanizada" },
  { value: "outro", label: "Outro" },
];

export default function OperacaoAgricola() {
  return (
    <AgroSectionForm
      section="operacoesAgricolas"
      title="Adicione as operações agrícolas que você domina"
      addLabel="Adicionar operação agrícola"
      nameLabel="Operação agrícola"
      entityLabel="operação agrícola"
      nameOptions={OPERACAO_AGRICOLA_OPTIONS}
    />
  );
}
