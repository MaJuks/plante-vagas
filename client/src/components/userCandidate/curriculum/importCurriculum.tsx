import { useRef, useState } from "react";
import { FileText, Upload, CheckCircle, AlertCircle, Sparkles, Loader2, PlusCircle, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { importCurriculumFromPdf } from "@/services/curriculum";
import { useCurriculum } from "../curriculumContext";
import type { CurriculumPayload } from "@/services/curriculum";

type ImportState = "idle" | "loading" | "preview" | "error";
type Section = keyof CurriculumPayload;

const inputClass = "w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-mediumGreen focus:border-transparent transition-all duration-200";
const labelClass = "text-sm font-medium text-gray-700 mb-1.5 block";

const toDateInput = (iso?: string) => (iso ? iso.slice(0, 10) : "");
const toIso = (dateInput?: string) => (dateInput ? new Date(dateInput).toISOString() : undefined);

const NIVEL_FORMACAO_OPTIONS = [
  { value: "fundamental_incompleto", label: "Ensino Fundamental Incompleto" },
  { value: "fundamental_completo", label: "Ensino Fundamental Completo" },
  { value: "medio_incompleto", label: "Ensino Médio Incompleto" },
  { value: "medio_completo", label: "Ensino Médio Completo" },
  { value: "tecnico_incompleto", label: "Curso Técnico Incompleto" },
  { value: "tecnico_completo", label: "Curso Técnico Completo" },
  { value: "superior_incompleto", label: "Ensino Superior Incompleto" },
  { value: "superior_completo", label: "Ensino Superior Completo" },
  { value: "pos_graduacao", label: "Pós-graduação (Especialização)" },
  { value: "mestrado", label: "Mestrado" },
  { value: "doutorado", label: "Doutorado" },
  { value: "pos_doutorado", label: "Pós-doutorado" },
];

const GRAU_FORMACAO_OPTIONS = [
  { value: "tecnologo", label: "Tecnólogo" },
  { value: "licenciatura", label: "Licenciatura" },
  { value: "bacharelado", label: "Bacharelado" },
  { value: "especializacao", label: "Pós-graduação (Especialização / MBA)" },
  { value: "mestrado", label: "Mestrado" },
  { value: "doutorado", label: "Doutorado" },
  { value: "pos_doutorado", label: "Pós-doutorado" },
];

const STATUS_FORMACAO_OPTIONS = [
  { value: "concluido", label: "Concluído" },
  { value: "em_andamento", label: "Em andamento" },
  { value: "trancado", label: "Trancado" },
  { value: "interrompido", label: "Interrompido" },
  { value: "nao_iniciado", label: "Não iniciado" },
];

const IDIOMA_OPTIONS = [
  { value: "portugues", label: "Português" },
  { value: "ingles", label: "Inglês" },
  { value: "espanhol", label: "Espanhol" },
  { value: "frances", label: "Francês" },
  { value: "alemao", label: "Alemão" },
  { value: "italiano", label: "Italiano" },
  { value: "mandarim", label: "Mandarim" },
  { value: "japones", label: "Japonês" },
  { value: "coreano", label: "Coreano" },
  { value: "arabe", label: "Árabe" },
  { value: "russo", label: "Russo" },
];

const NIVEL_IDIOMA_OPTIONS = [
  { value: "basico", label: "Básico" },
  { value: "intermediario", label: "Intermediário" },
  { value: "avancado", label: "Avançado" },
  { value: "fluente", label: "Fluente / Proficiência" },
  { value: "nativo", label: "Nativo" },
];

const NIVEL_EXPERIENCIA_OPTIONS = [
  { value: "basico", label: "Básico" },
  { value: "intermediario", label: "Intermediário" },
  { value: "avancado", label: "Avançado" },
];

const AGRO_SECTIONS: {
  key: Section;
  title: string;
  addLabel: string;
  nameLabel: string;
  nameOptions: { value: string; label: string }[];
}[] = [
  {
    key: "operacoesAgricolas",
    title: "Operações Agrícolas",
    addLabel: "Adicionar operação agrícola",
    nameLabel: "Operação agrícola",
    nameOptions: [
      { value: "plantio", label: "Plantio" },
      { value: "colheita", label: "Colheita" },
      { value: "pulverizacao", label: "Pulverização" },
      { value: "preparo_solo", label: "Preparo do solo" },
      { value: "irrigacao", label: "Irrigação" },
      { value: "adubacao", label: "Adubação / Fertilização" },
      { value: "colheita_mecanizada", label: "Colheita mecanizada" },
      { value: "outro", label: "Outro" },
    ],
  },
  {
    key: "operacoesPecuarias",
    title: "Operações Pecuárias",
    addLabel: "Adicionar operação pecuária",
    nameLabel: "Operação pecuária",
    nameOptions: [
      { value: "manejo_bovinos", label: "Manejo de bovinos" },
      { value: "manejo_aves", label: "Manejo de aves" },
      { value: "manejo_suinos", label: "Manejo de suínos" },
      { value: "ordenha", label: "Ordenha" },
      { value: "vacinacao", label: "Vacinação" },
      { value: "nutricao_animal", label: "Nutrição animal" },
      { value: "outro", label: "Outro" },
    ],
  },
  {
    key: "operacoesFlorestais",
    title: "Operações Florestais",
    addLabel: "Adicionar operação florestal",
    nameLabel: "Operação florestal",
    nameOptions: [
      { value: "plantio_florestal", label: "Plantio florestal" },
      { value: "corte_colheita_madeira", label: "Corte / colheita de madeira" },
      { value: "manejo_florestal", label: "Manejo florestal" },
      { value: "viveiro_florestal", label: "Viveiro florestal" },
      { value: "controle_pragas_florestais", label: "Controle de pragas florestais" },
      { value: "outro", label: "Outro" },
    ],
  },
  {
    key: "culturas",
    title: "Culturas",
    addLabel: "Adicionar cultura",
    nameLabel: "Cultura",
    nameOptions: [
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
    ],
  },
  {
    key: "maquinas",
    title: "Máquinas",
    addLabel: "Adicionar máquina",
    nameLabel: "Máquina",
    nameOptions: [
      { value: "trator", label: "Trator" },
      { value: "colheitadeira", label: "Colheitadeira" },
      { value: "pulverizador", label: "Pulverizador" },
      { value: "plantadeira", label: "Plantadeira" },
      { value: "semeadora", label: "Semeadora" },
      { value: "rocadeira", label: "Roçadeira" },
      { value: "caminhao_carreta_agricola", label: "Caminhão / carreta agrícola" },
      { value: "outro", label: "Outro" },
    ],
  },
  {
    key: "tecnologias",
    title: "Tecnologias",
    addLabel: "Adicionar tecnologia",
    nameLabel: "Tecnologia",
    nameOptions: [
      { value: "agricultura_precisao", label: "Agricultura de precisão" },
      { value: "gps_piloto_automatico", label: "GPS / piloto automático" },
      { value: "drones_agricolas", label: "Drones agrícolas" },
      { value: "sensoriamento_remoto", label: "Sensoriamento remoto" },
      { value: "softwares_gestao_agricola", label: "Softwares de gestão agrícola" },
      { value: "irrigacao_automatizada", label: "Irrigação automatizada" },
      { value: "outro", label: "Outro" },
    ],
  },
];

const EMPTY_EXPERIENCIA = { cargo: "", empresa: "", descricao: "", inicioData: "", fimData: "", empregoAtual: false };
const EMPTY_FORMACAO = { nivelFormacao: "", grauFormacao: "", curso: "", nomeInstituicao: "", status: "", inicioData: "", fimData: "" };
const EMPTY_CERTIFICADO = { nomeInstituicao: "", descricao: "", certificate_name: "" };
const EMPTY_IDIOMA = { idioma: "", nivel: "" };
const EMPTY_DIFERENCIAL = { descricao: "" };
const EMPTY_AGRO_ITEM = { nome: "", nivelExperiencia: "", descricao: "" };

const toEditableDraft = (data: CurriculumPayload): CurriculumPayload => ({
  ...data,
  experiencias: data.experiencias.map((e) => ({ ...e, inicioData: toDateInput(e.inicioData), fimData: toDateInput(e.fimData) })),
  formacoes: data.formacoes.map((f) => ({ ...f, inicioData: toDateInput(f.inicioData), fimData: toDateInput(f.fimData) })),
});

const toSubmitPayload = (data: CurriculumPayload): CurriculumPayload => ({
  ...data,
  experiencias: data.experiencias.map((e) => ({ ...e, inicioData: toIso(e.inicioData) ?? e.inicioData, fimData: toIso(e.fimData) })),
  formacoes: data.formacoes.map((f) => ({ ...f, inicioData: toIso(f.inicioData) ?? f.inicioData, fimData: toIso(f.fimData) })),
});

export default function ImportCurriculum() {
  const { importAll } = useCurriculum();
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [importState, setImportState] = useState<ImportState>("idle");
  const [draft, setDraft] = useState<CurriculumPayload | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const updateItem = (section: Section, index: number, patch: Record<string, any>) => {
    setDraft((prev) => {
      if (!prev) return prev;
      const list = [...(prev[section] as any[])];
      list[index] = { ...list[index], ...patch };
      return { ...prev, [section]: list };
    });
  };

  const addItem = (section: Section, template: Record<string, any>) => {
    setDraft((prev) => (prev ? { ...prev, [section]: [...(prev[section] as any[]), { ...template }] } : prev));
  };

  const removeItem = (section: Section, index: number) => {
    setDraft((prev) => (prev ? { ...prev, [section]: (prev[section] as any[]).filter((_, i) => i !== index) } : prev));
  };

  const handleFileChange = (file: File | null) => {
    if (!file) return;
    if (file.type !== "application/pdf") {
      toast.error("Selecione um arquivo PDF válido.");
      return;
    }
    setSelectedFile(file);
    setImportState("idle");
    setDraft(null);
  };

  const handleImport = async () => {
    if (!selectedFile) return;
    setImportState("loading");
    const loadingToast = toast.loading("Analisando o PDF com IA...");
    try {
      const data = await importCurriculumFromPdf(selectedFile);
      setDraft(toEditableDraft(data));
      setImportState("preview");
      toast.success("PDF analisado com sucesso!", { id: loadingToast });
    } catch (err: any) {
      setImportState("error");
      toast.error(err.message || "Erro ao importar o PDF.", { id: loadingToast });
    }
  };

  const handleApply = async () => {
    if (!draft) return;
    const loadingToast = toast.loading("Salvando currículo...");
    try {
      await importAll(toSubmitPayload(draft));
      toast.success("Currículo importado e salvo com sucesso!", { id: loadingToast });
      setImportState("idle");
      setSelectedFile(null);
      setDraft(null);
    } catch (err: any) {
      toast.error(err.message || "Erro ao salvar o currículo.", { id: loadingToast });
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0] ?? null;
    handleFileChange(file);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100 font-SecondFont">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="w-5 h-5 text-deepGreen" aria-hidden="true" />
          <h1 className="text-2xl font-bold text-deepGreen font-PrimaryFont">Importar currículo via PDF</h1>
        </div>
        <p className="text-gray-600 mb-8">
          Faça upload do seu currículo em PDF e nossa IA irá extrair as informações automaticamente.
        </p>

        {/* Drop zone */}
        <div
          className={`border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center gap-4 transition-colors cursor-pointer ${
            isDragging ? "border-mediumGreen bg-paleGreen/20" : "border-gray-200 hover:border-mediumGreen hover:bg-paleGreen/10"
          }`}
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
        >
          <input
            ref={inputRef}
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={(e) => handleFileChange(e.target.files?.[0] ?? null)}
          />
          <FileText className="w-12 h-12 text-deepGreen opacity-50" aria-hidden="true" />
          {selectedFile ? (
            <div className="text-center">
              <p className="font-medium text-gray-700">{selectedFile.name}</p>
              <p className="text-xs text-gray-500 mt-1">
                {(selectedFile.size / 1024).toFixed(1)} KB — clique para trocar
              </p>
            </div>
          ) : (
            <div className="text-center">
              <p className="font-medium text-gray-700">Arraste seu PDF aqui ou clique para selecionar</p>
              <p className="text-xs text-gray-500 mt-1">Somente arquivos .pdf são aceitos</p>
            </div>
          )}
        </div>

        {selectedFile && importState !== "preview" && (
          <div className="flex justify-end mt-6">
            <button
              disabled={importState === "loading"}
              className="flex items-center gap-2 bg-deepGreen text-white px-6 py-3 rounded-xl hover:bg-mediumGreen transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              onClick={handleImport}
            >
              {importState === "loading" ? (
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
              ) : (
                <Upload className="w-4 h-4" aria-hidden="true" />
              )}
              {importState === "loading" ? "Analisando..." : "Importar com IA"}
            </button>
          </div>
        )}

        {importState === "error" && (
          <div className="flex items-center gap-3 mt-6 bg-red-50 border border-red-200 text-red-700 rounded-xl p-4">
            <AlertCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
            <p className="text-sm">Não foi possível processar o PDF. Verifique se o arquivo é um currículo válido e tente novamente.</p>
          </div>
        )}

        {importState === "preview" && draft && (
          <div className="mt-8 flex flex-col gap-8">
            <div className="flex items-center gap-2 text-deepGreen">
              <CheckCircle className="w-5 h-5" aria-hidden="true" />
              <p className="font-medium">Dados extraídos com sucesso. Revise e ajuste o que precisar antes de salvar.</p>
            </div>

            <SectionBlock title="Experiências Profissionais" addLabel="Adicionar experiência" onAdd={() => addItem("experiencias", EMPTY_EXPERIENCIA)}>
              {draft.experiencias.map((exp: any, i: number) => (
                <ItemCard key={i} onRemove={() => removeItem("experiencias", i)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <TextField label="Cargo" value={exp.cargo} onChange={(v) => updateItem("experiencias", i, { cargo: v })} />
                    <TextField label="Empresa" value={exp.empresa} onChange={(v) => updateItem("experiencias", i, { empresa: v })} />
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <input
                      type="checkbox"
                      checked={!!exp.empregoAtual}
                      onChange={(e) => updateItem("experiencias", i, { empregoAtual: e.target.checked })}
                      className="w-4 h-4 accent-mediumGreen rounded"
                      id={`emprego-atual-${i}`}
                    />
                    <label htmlFor={`emprego-atual-${i}`} className="text-sm text-gray-700">Emprego atual</label>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <DateField label="Início" value={exp.inicioData} onChange={(v) => updateItem("experiencias", i, { inicioData: v })} />
                    <DateField label="Fim" value={exp.fimData} disabled={!!exp.empregoAtual} onChange={(v) => updateItem("experiencias", i, { fimData: v })} />
                  </div>
                  <TextAreaField label="Descrição da função e atividades" value={exp.descricao} onChange={(v) => updateItem("experiencias", i, { descricao: v })} />
                </ItemCard>
              ))}
            </SectionBlock>

            <SectionBlock title="Formação Acadêmica" addLabel="Adicionar formação" onAdd={() => addItem("formacoes", EMPTY_FORMACAO)}>
              {draft.formacoes.map((f: any, i: number) => (
                <ItemCard key={i} onRemove={() => removeItem("formacoes", i)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <SelectField label="Nível de formação" value={f.nivelFormacao} options={NIVEL_FORMACAO_OPTIONS} onChange={(v) => updateItem("formacoes", i, { nivelFormacao: v })} />
                    <SelectField label="Grau de formação" value={f.grauFormacao} options={GRAU_FORMACAO_OPTIONS} onChange={(v) => updateItem("formacoes", i, { grauFormacao: v })} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 mb-4">
                    <SelectField label="Status" value={f.status} options={STATUS_FORMACAO_OPTIONS} onChange={(v) => updateItem("formacoes", i, { status: v })} />
                    <TextField label="Curso" value={f.curso} onChange={(v) => updateItem("formacoes", i, { curso: v })} />
                  </div>
                  <TextField label="Nome da instituição" value={f.nomeInstituicao} onChange={(v) => updateItem("formacoes", i, { nomeInstituicao: v })} className="mb-4" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <DateField label="Início" value={f.inicioData} onChange={(v) => updateItem("formacoes", i, { inicioData: v })} />
                    <DateField label="Fim" value={f.fimData} onChange={(v) => updateItem("formacoes", i, { fimData: v })} />
                  </div>
                </ItemCard>
              ))}
            </SectionBlock>

            <SectionBlock title="Idiomas" addLabel="Adicionar idioma" onAdd={() => addItem("idiomas", EMPTY_IDIOMA)}>
              {draft.idiomas.map((lang: any, i: number) => (
                <ItemCard key={i} onRemove={() => removeItem("idiomas", i)}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <SelectField label="Idioma" value={lang.idioma} options={IDIOMA_OPTIONS} onChange={(v) => updateItem("idiomas", i, { idioma: v })} />
                    <SelectField label="Nível" value={lang.nivel} options={NIVEL_IDIOMA_OPTIONS} onChange={(v) => updateItem("idiomas", i, { nivel: v })} />
                  </div>
                </ItemCard>
              ))}
            </SectionBlock>

            <SectionBlock title="Certificados" addLabel="Adicionar certificado" onAdd={() => addItem("certificados", EMPTY_CERTIFICADO)}>
              {draft.certificados.map((c: any, i: number) => (
                <ItemCard key={i} onRemove={() => removeItem("certificados", i)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <TextField label="Certificado" value={c.certificate_name} onChange={(v) => updateItem("certificados", i, { certificate_name: v })} />
                    <TextField label="Nome da instituição" value={c.nomeInstituicao} onChange={(v) => updateItem("certificados", i, { nomeInstituicao: v })} />
                  </div>
                  <TextAreaField label="Descrição" value={c.descricao} onChange={(v) => updateItem("certificados", i, { descricao: v })} />
                </ItemCard>
              ))}
            </SectionBlock>

            <SectionBlock title="Diferenciais" addLabel="Adicionar diferencial" onAdd={() => addItem("diferenciais", EMPTY_DIFERENCIAL)}>
              {draft.diferenciais.map((d: any, i: number) => (
                <ItemCard key={i} onRemove={() => removeItem("diferenciais", i)}>
                  <TextField label="Característica" value={d.descricao} onChange={(v) => updateItem("diferenciais", i, { descricao: v })} />
                </ItemCard>
              ))}
            </SectionBlock>

            {AGRO_SECTIONS.map(({ key, title, addLabel, nameLabel, nameOptions }) => (
              <SectionBlock key={key} title={title} addLabel={addLabel} onAdd={() => addItem(key, EMPTY_AGRO_ITEM)}>
                {(draft[key] as any[]).map((item: any, i: number) => (
                  <ItemCard key={i} onRemove={() => removeItem(key, i)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <SelectField label={nameLabel} value={item.nome} options={nameOptions} onChange={(v) => updateItem(key, i, { nome: v })} />
                      <SelectField label="Nível de experiência" value={item.nivelExperiencia} options={NIVEL_EXPERIENCIA_OPTIONS} onChange={(v) => updateItem(key, i, { nivelExperiencia: v })} />
                    </div>
                    <TextAreaField label="Descrição" value={item.descricao} onChange={(v) => updateItem(key, i, { descricao: v })} />
                  </ItemCard>
                ))}
              </SectionBlock>
            ))}

            <div className="flex gap-3 justify-end mt-2">
              <button
                className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium"
                onClick={() => { setImportState("idle"); setDraft(null); }}
              >
                Cancelar
              </button>
              <button
                className="flex items-center gap-2 bg-deepGreen text-white px-5 py-2.5 rounded-xl hover:bg-mediumGreen transition-colors duration-200 text-sm font-medium"
                onClick={handleApply}
              >
                <CheckCircle className="w-4 h-4" aria-hidden="true" />
                Salvar currículo importado
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function SectionBlock({ title, addLabel, onAdd, children }: { title: string; addLabel: string; onAdd: () => void; children: React.ReactNode }) {
  const hasItems = Array.isArray(children) ? children.length > 0 : !!children;
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-deepGreen uppercase tracking-wide">{title}</h2>
        <button
          type="button"
          onClick={onAdd}
          className="flex items-center gap-1.5 text-xs font-medium text-deepGreen border border-deepGreen px-3 py-1.5 rounded-lg hover:bg-deepGreen hover:text-white transition-colors duration-200"
        >
          <PlusCircle className="w-3.5 h-3.5" aria-hidden="true" />
          {addLabel}
        </button>
      </div>
      {hasItems ? (
        <div className="flex flex-col gap-3">{children}</div>
      ) : (
        <p className="text-sm text-gray-400 italic">Nenhum item extraído. Adicione manualmente se necessário.</p>
      )}
    </div>
  );
}

function ItemCard({ children, onRemove }: { children: React.ReactNode; onRemove: () => void }) {
  return (
    <div className="relative bg-gray-50 border border-gray-200 rounded-xl p-5 pr-12">
      <button
        type="button"
        onClick={onRemove}
        aria-label="Remover item"
        className="absolute top-4 right-4 text-red-500 hover:text-red-700 transition-colors duration-200"
      >
        <Trash2 className="w-4 h-4" aria-hidden="true" />
      </button>
      {children}
    </div>
  );
}

function TextField({ label, value, onChange, className }: { label: string; value: string; onChange: (v: string) => void; className?: string }) {
  return (
    <div className={className}>
      <label className={labelClass}>{label}</label>
      <input type="text" className={inputClass} value={value ?? ""} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

function TextAreaField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      <textarea rows={3} className={`${inputClass} resize-none`} value={value ?? ""} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

function DateField({ label, value, onChange, disabled }: { label: string; value: string; onChange: (v: string) => void; disabled?: boolean }) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      <input
        type="date"
        disabled={disabled}
        className={`${inputClass} ${disabled ? "bg-gray-100 text-gray-400 cursor-not-allowed" : ""}`}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function SelectField({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: { value: string; label: string }[] }) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      <select className={inputClass} value={value ?? ""} onChange={(e) => onChange(e.target.value)}>
        <option value=""></option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}
