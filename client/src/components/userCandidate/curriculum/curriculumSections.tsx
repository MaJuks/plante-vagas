import {
  Briefcase,
  GraduationCap,
  Languages,
  Award,
  Star,
  CalendarDays,
  Tractor,
  PawPrint,
  TreePine,
  Wheat,
  Wrench,
  Cpu,
} from "lucide-react";
import type { CurriculumPayload } from "@/services/curriculum";
import {
  formatDate,
  idiomaLabel,
  nivelLabel,
  nivelFormacaoLabel,
  nivelExperienciaLabel,
  agroNomeLabel,
} from "./curriculumLabels";

export function SectionTitle({ icon: Icon, title }: { icon: any; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <Icon className="w-5 h-5 text-deepGreen shrink-0" />
      <h2 className="text-lg font-medium text-deepGreen">{title}</h2>
      <hr className="flex-1 border-deepGreen opacity-30" />
    </div>
  );
}

export function EmptySection({ message }: { message: string }) {
  return (
    <p className="text-gray-400 text-sm italic py-2">{message}</p>
  );
}

export function AgroSectionView({ icon, title, items, emptyMessage }: { icon: any; title: string; items: any[]; emptyMessage: string }) {
  return (
    <div className="mb-8">
      <SectionTitle icon={icon} title={title} />
      {items.length === 0 ? (
        <EmptySection message={emptyMessage} />
      ) : (
        <div className="flex flex-col gap-4">
          {items.map((item, i) => (
            <div key={i} className="bg-paleGreen border border-deepGreen rounded-md p-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                <p className="font-medium text-DeepGray">{agroNomeLabel[item.nome] || item.nome}</p>
                {item.nivelExperiencia && (
                  <span className="text-xs text-gray-500 shrink-0">
                    {nivelExperienciaLabel[item.nivelExperiencia] || item.nivelExperiencia}
                  </span>
                )}
              </div>
              {item.descricao && (
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{item.descricao}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

type Props = {
  curriculum: CurriculumPayload;
};

export default function CurriculumSections({ curriculum }: Props) {
  return (
    <>
      {/* Experiência Profissional */}
      <div className="mb-8">
        <SectionTitle icon={Briefcase} title="Experiência Profissional" />
        {curriculum.experiencias.length === 0 ? (
          <EmptySection message="Nenhuma experiência profissional cadastrada." />
        ) : (
          <div className="flex flex-col gap-4">
            {curriculum.experiencias.map((exp: any, i: number) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <p className="font-medium text-gray-700">{exp.cargo}</p>
                    <p className="text-sm text-gray-600">{exp.empresa}</p>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-gray-500 shrink-0">
                    <CalendarDays className="w-3 h-3" />
                    {formatDate(exp.inicioData)} — {exp.empregoAtual ? "Atual" : formatDate(exp.fimData)}
                  </span>
                </div>
                {exp.descricao && (
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">{exp.descricao}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Formação Acadêmica */}
      <div className="mb-8">
        <SectionTitle icon={GraduationCap} title="Formação Acadêmica" />
        {curriculum.formacoes.length === 0 ? (
          <EmptySection message="Nenhuma formação acadêmica cadastrada." />
        ) : (
          <div className="flex flex-col gap-4">
            {curriculum.formacoes.map((form: any, i: number) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <p className="font-medium text-gray-700">{form.curso}</p>
                    <p className="text-sm text-gray-600">{form.nomeInstituicao}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {nivelFormacaoLabel[form.nivelFormacao] || form.nivelFormacao}
                      {form.grauFormacao ? ` · ${form.grauFormacao}` : ""}
                      {form.status ? ` · ${form.status}` : ""}
                    </p>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-gray-500 shrink-0">
                    <CalendarDays className="w-3 h-3" />
                    {formatDate(form.inicioData)} — {formatDate(form.fimData) || "Atual"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Idiomas */}
      <div className="mb-8">
        <SectionTitle icon={Languages} title="Idiomas" />
        {curriculum.idiomas.length === 0 ? (
          <EmptySection message="Nenhum idioma cadastrado." />
        ) : (
          <div className="flex flex-wrap gap-3">
            {curriculum.idiomas.map((idioma: any, i: number) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm">
                <span className="font-medium text-gray-700">{idiomaLabel[idioma.idioma] || idioma.idioma}</span>
                <span className="text-gray-500"> · {nivelLabel[idioma.nivel] || idioma.nivel}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Certificados */}
      <div className="mb-8">
        <SectionTitle icon={Award} title="Certificados" />
        {curriculum.certificados.length === 0 ? (
          <EmptySection message="Nenhum certificado cadastrado." />
        ) : (
          <div className="flex flex-col gap-4">
            {curriculum.certificados.map((cert: any, i: number) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <p className="font-medium text-gray-700">{cert.certificate_name}</p>
                <p className="text-sm text-gray-600">{cert.nomeInstituicao}</p>
                {cert.descricao && (
                  <p className="text-sm text-gray-500 mt-1">{cert.descricao}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Diferenciais */}
      <div className="mb-8">
        <SectionTitle icon={Star} title="Diferenciais" />
        {curriculum.diferenciais.length === 0 ? (
          <EmptySection message="Nenhum diferencial cadastrado." />
        ) : (
          <div className="flex flex-wrap gap-2">
            {curriculum.diferenciais.map((dif: any, i: number) => (
              <span
                key={i}
                className="bg-paleGreen/40 border border-paleGreen text-deepGreen text-sm px-3 py-1 rounded-full"
              >
                {dif.descricao}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Operações Agrícolas */}
      <AgroSectionView
        icon={Tractor}
        title="Operações Agrícolas"
        items={curriculum.operacoesAgricolas}
        emptyMessage="Nenhuma operação agrícola cadastrada."
      />

      {/* Operações Pecuárias */}
      <AgroSectionView
        icon={PawPrint}
        title="Operações Pecuárias"
        items={curriculum.operacoesPecuarias}
        emptyMessage="Nenhuma operação pecuária cadastrada."
      />

      {/* Operações Florestais */}
      <AgroSectionView
        icon={TreePine}
        title="Operações Florestais"
        items={curriculum.operacoesFlorestais}
        emptyMessage="Nenhuma operação florestal cadastrada."
      />

      {/* Culturas */}
      <AgroSectionView
        icon={Wheat}
        title="Culturas"
        items={curriculum.culturas}
        emptyMessage="Nenhuma cultura cadastrada."
      />

      {/* Máquinas */}
      <AgroSectionView
        icon={Wrench}
        title="Máquinas"
        items={curriculum.maquinas}
        emptyMessage="Nenhuma máquina cadastrada."
      />

      {/* Tecnologias */}
      <AgroSectionView
        icon={Cpu}
        title="Tecnologias"
        items={curriculum.tecnologias}
        emptyMessage="Nenhuma tecnologia cadastrada."
      />
    </>
  );
}
