import AgroSectionForm from "./agroSectionForm";

const OPERACAO_PECUARIA_OPTIONS = [
  { value: "manejo_bovinos", label: "Manejo de bovinos" },
  { value: "manejo_aves", label: "Manejo de aves" },
  { value: "manejo_suinos", label: "Manejo de suínos" },
  { value: "ordenha", label: "Ordenha" },
  { value: "vacinacao", label: "Vacinação" },
  { value: "nutricao_animal", label: "Nutrição animal" },
  { value: "outro", label: "Outro" },
];

export default function OperacaoPecuaria() {
  return (
    <AgroSectionForm
      section="operacoesPecuarias"
      title="Adicione as operações pecuárias que você domina"
      addLabel="Adicionar operação pecuária"
      nameLabel="Operação pecuária"
      entityLabel="operação pecuária"
      nameOptions={OPERACAO_PECUARIA_OPTIONS}
    />
  );
}
