import { useRef, useState } from "react";
import { FileText, Upload, CheckCircle, AlertCircle, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { importCurriculumFromPdf } from "@/services/curriculum";
import { useCurriculum } from "../curriculumContext";
import type { CurriculumPayload } from "@/services/curriculum";

type ImportState = "idle" | "loading" | "preview" | "error";

export default function ImportCurriculum() {
  const { importAll } = useCurriculum();
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [importState, setImportState] = useState<ImportState>("idle");
  const [extractedData, setExtractedData] = useState<CurriculumPayload | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (file: File | null) => {
    if (!file) return;
    if (file.type !== "application/pdf") {
      toast.error("Selecione um arquivo PDF válido.");
      return;
    }
    setSelectedFile(file);
    setImportState("idle");
    setExtractedData(null);
  };

  const handleImport = async () => {
    if (!selectedFile) return;
    setImportState("loading");
    const loadingToast = toast.loading("Analisando o PDF com IA...");
    try {
      const data = await importCurriculumFromPdf(selectedFile);
      setExtractedData(data);
      setImportState("preview");
      toast.success("PDF analisado com sucesso!", { id: loadingToast });
    } catch (err: any) {
      setImportState("error");
      toast.error(err.message || "Erro ao importar o PDF.", { id: loadingToast });
    }
  };

  const handleApply = async () => {
    if (!extractedData) return;
    const loadingToast = toast.loading("Salvando currículo...");
    try {
      await importAll(extractedData);
      toast.success("Currículo importado e salvo com sucesso!", { id: loadingToast });
      setImportState("idle");
      setSelectedFile(null);
      setExtractedData(null);
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
    <div className="flex flex-col p-8 md:p-36 lg:p-40 w-full bg-MediumGray max-w-6xl mx-auto font-SecondFont">
      <hr className="w-full" />
      <div className="my-6">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="w-5 h-5 text-deepGreen" />
          <h1 className="text-xl md:text-2xl font-medium">Importar Currículo via PDF</h1>
        </div>
        <p className="text-sm text-gray-500">
          Faça upload do seu currículo em PDF e nossa IA irá extrair as informações automaticamente.
        </p>
      </div>

      {/* Drop zone */}
      <div
        className={`border-2 border-dashed rounded-md p-10 flex flex-col items-center justify-center gap-4 transition-colors cursor-pointer ${
          isDragging ? "border-deepGreen bg-paleGreen" : "border-gray-300 hover:border-deepGreen hover:bg-paleGreen"
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
        <FileText className="w-12 h-12 text-deepGreen opacity-60" />
        {selectedFile ? (
          <div className="text-center">
            <p className="font-medium text-DeepGray">{selectedFile.name}</p>
            <p className="text-xs text-gray-500 mt-1">
              {(selectedFile.size / 1024).toFixed(1)} KB — clique para trocar
            </p>
          </div>
        ) : (
          <div className="text-center">
            <p className="font-medium text-DeepGray">Arraste seu PDF aqui ou clique para selecionar</p>
            <p className="text-xs text-gray-500 mt-1">Somente arquivos .pdf são aceitos</p>
          </div>
        )}
      </div>

      {selectedFile && importState !== "preview" && (
        <div className="flex justify-end mt-6">
          <button
            disabled={importState === "loading"}
            className="flex items-center gap-2 bg-deepGreen text-white px-5 py-2 rounded-md hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
            onClick={handleImport}
          >
            <Upload className="w-4 h-4" />
            {importState === "loading" ? "Analisando..." : "Importar com IA"}
          </button>
        </div>
      )}

      {importState === "error" && (
        <div className="flex items-center gap-3 mt-6 bg-red-50 border border-red-300 text-red-700 rounded-md p-4">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p className="text-sm">Não foi possível processar o PDF. Verifique se o arquivo é um currículo válido e tente novamente.</p>
        </div>
      )}

      {importState === "preview" && extractedData && (
        <div className="mt-8 flex flex-col gap-6">
          <div className="flex items-center gap-2 text-deepGreen">
            <CheckCircle className="w-5 h-5" />
            <p className="font-medium">Dados extraídos com sucesso. Revise abaixo antes de salvar.</p>
          </div>

          {extractedData.experiencias.length > 0 && (
            <PreviewSection title="Experiências Profissionais">
              {extractedData.experiencias.map((e, i) => (
                <PreviewCard key={i} primary={e.cargo} secondary={e.empresa} detail={e.descricao} />
              ))}
            </PreviewSection>
          )}

          {extractedData.formacoes.length > 0 && (
            <PreviewSection title="Formação Acadêmica">
              {extractedData.formacoes.map((f, i) => (
                <PreviewCard key={i} primary={f.curso} secondary={f.nomeInstituicao} detail={f.nivelFormacao} />
              ))}
            </PreviewSection>
          )}

          {extractedData.idiomas.length > 0 && (
            <PreviewSection title="Idiomas">
              <div className="flex flex-wrap gap-2">
                {extractedData.idiomas.map((lang, i) => (
                  <span key={i} className="bg-paleGreen border border-deepGreen text-DeepGray text-sm px-3 py-1 rounded-full">
                    {lang.idioma} · {lang.nivel}
                  </span>
                ))}
              </div>
            </PreviewSection>
          )}

          {extractedData.certificados.length > 0 && (
            <PreviewSection title="Certificados">
              {extractedData.certificados.map((c, i) => (
                <PreviewCard key={i} primary={c.certificate_name} secondary={c.nomeInstituicao} detail={c.descricao} />
              ))}
            </PreviewSection>
          )}

          {extractedData.diferenciais.length > 0 && (
            <PreviewSection title="Diferenciais">
              <div className="flex flex-wrap gap-2">
                {extractedData.diferenciais.map((d, i) => (
                  <span key={i} className="bg-paleGreen border border-deepGreen text-DeepGray text-sm px-3 py-1 rounded-full">
                    {d.descricao}
                  </span>
                ))}
              </div>
            </PreviewSection>
          )}

          {extractedData.operacoesAgricolas.length > 0 && (
            <PreviewSection title="Operações Agrícolas">
              {extractedData.operacoesAgricolas.map((o, i) => (
                <PreviewCard key={i} primary={o.nome} secondary={o.nivelExperiencia} detail={o.descricao} />
              ))}
            </PreviewSection>
          )}

          {extractedData.operacoesPecuarias.length > 0 && (
            <PreviewSection title="Operações Pecuárias">
              {extractedData.operacoesPecuarias.map((o, i) => (
                <PreviewCard key={i} primary={o.nome} secondary={o.nivelExperiencia} detail={o.descricao} />
              ))}
            </PreviewSection>
          )}

          {extractedData.operacoesFlorestais.length > 0 && (
            <PreviewSection title="Operações Florestais">
              {extractedData.operacoesFlorestais.map((o, i) => (
                <PreviewCard key={i} primary={o.nome} secondary={o.nivelExperiencia} detail={o.descricao} />
              ))}
            </PreviewSection>
          )}

          {extractedData.culturas.length > 0 && (
            <PreviewSection title="Culturas">
              {extractedData.culturas.map((c, i) => (
                <PreviewCard key={i} primary={c.nome} secondary={c.nivelExperiencia} detail={c.descricao} />
              ))}
            </PreviewSection>
          )}

          {extractedData.maquinas.length > 0 && (
            <PreviewSection title="Máquinas">
              {extractedData.maquinas.map((m, i) => (
                <PreviewCard key={i} primary={m.nome} secondary={m.nivelExperiencia} detail={m.descricao} />
              ))}
            </PreviewSection>
          )}

          {extractedData.tecnologias.length > 0 && (
            <PreviewSection title="Tecnologias">
              {extractedData.tecnologias.map((t, i) => (
                <PreviewCard key={i} primary={t.nome} secondary={t.nivelExperiencia} detail={t.descricao} />
              ))}
            </PreviewSection>
          )}

          <div className="flex gap-3 justify-end mt-2">
            <button
              className="px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors text-sm"
              onClick={() => { setImportState("idle"); setExtractedData(null); }}
            >
              Cancelar
            </button>
            <button
              className="flex items-center gap-2 bg-deepGreen text-white px-5 py-2 rounded-md hover:opacity-90 transition-opacity text-sm"
              onClick={handleApply}
            >
              <CheckCircle className="w-4 h-4" />
              Salvar currículo importado
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function PreviewSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-deepGreen uppercase tracking-wide mb-3">{title}</h2>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

function PreviewCard({ primary, secondary, detail }: { primary: string; secondary?: string; detail?: string }) {
  return (
    <div className="bg-paleGreen border border-deepGreen rounded-md p-4">
      <p className="font-medium text-DeepGray">{primary}</p>
      {secondary && <p className="text-sm text-gray-600">{secondary}</p>}
      {detail && <p className="text-xs text-gray-500 mt-1 line-clamp-2">{detail}</p>}
    </div>
  );
}
