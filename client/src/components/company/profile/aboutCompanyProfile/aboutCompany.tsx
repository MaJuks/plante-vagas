
type Props = {
  descricao_longa: string;
};

export default function AboutCompany({ descricao_longa }: Props) {
  return (
    <div className="flex flex-col gap-8">
        <p className="text-2xl">SOBRE A EMPRESA</p>
        <div className="bg-white p-12"><p>{descricao_longa}</p></div>
    </div>
  );
}