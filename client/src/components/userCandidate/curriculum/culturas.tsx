import AgroSectionForm from "./agroSectionForm";

const CULTURA_OPTIONS = [
  { value: "soja", label: "Soja" },
  { value: "milho", label: "Milho" },
  { value: "cafe", label: "Café" },
  { value: "cana_de_acucar", label: "Cana-de-açúcar" },
  { value: "algodao", label: "Algodão" },
  { value: "arroz", label: "Arroz" },
  { value: "feijao", label: "Feijão" },
  { value: "trigo", label: "Trigo" },
  { value: "hortalicas", label: "Hortaliças" },
  { value: "fruticultura", label: "Fruticultura" },
  { value: "outro", label: "Outro" },
];

export default function Culturas() {
  return (
    <AgroSectionForm
      section="culturas"
      title="Adicione as culturas com as quais você tem experiência"
      addLabel="Adicionar cultura"
      nameLabel="Cultura"
      entityLabel="cultura"
      nameOptions={CULTURA_OPTIONS}
    />
  );
}
