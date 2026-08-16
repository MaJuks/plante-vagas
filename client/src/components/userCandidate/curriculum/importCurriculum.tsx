import { useRef, useState } from "react";
import { FileText, Upload, CheckCircle, AlertCircle, Sparkles, Loader2 } from "lucide-react";
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

        {importState === "preview" && extractedData && (
          <div className="mt-8 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-deepGreen">
              <CheckCircle className="w-5 h-5" aria-hidden="true" />
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
                    <span key={i} className="bg-paleGreen/40 border border-paleGreen text-deepGreen text-sm px-3 py-1 rounded-full">
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
                    <span key={i} className="bg-paleGreen/40 border border-paleGreen text-deepGreen text-sm px-3 py-1 rounded-full">
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
                className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium"
                onClick={() => { setImportState("idle"); setExtractedData(null); }}
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
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
      <p className="font-medium text-gray-700">{primary}</p>
      {secondary && <p className="text-sm text-gray-600">{secondary}</p>}
      {detail && <p className="text-xs text-gray-500 mt-1 line-clamp-2">{detail}</p>}
    </div>
  );
}
