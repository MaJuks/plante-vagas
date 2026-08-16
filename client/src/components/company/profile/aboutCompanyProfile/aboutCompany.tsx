import { Building2 } from "lucide-react";

type Props = {
  descricao_longa: string;
};

export default function AboutCompany({ descricao_longa }: Props) {
  return (
    <div className="space-y-8">
      <section>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-paleGreen rounded-xl flex items-center justify-center">
            <Building2 size={20} className="text-deepGreen" aria-hidden="true" />
          </div>
          <h3 className="text-lg font-bold text-deepGreen font-PrimaryFont">
            Sobre a Empresa
          </h3>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <p className="font-SecondFont text-gray-700 leading-relaxed">
            {descricao_longa || "Nenhuma descrição cadastrada ainda."}
          </p>
        </div>
      </section>
    </div>
  );
}
