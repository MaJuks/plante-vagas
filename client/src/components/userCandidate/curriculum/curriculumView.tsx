import { useCurriculum } from "../curriculumContext";
import { useUser } from "../userContext";
import {
  User,
  Briefcase,
  GraduationCap,
  Languages,
  Award,
  Star,
  MapPin,
  Mail,
  Phone,
  CalendarDays,
  Tractor,
  PawPrint,
  TreePine,
  Wheat,
  Wrench,
  Cpu,
  FilePlus2,
  Upload,
} from "lucide-react";

const formatDate = (iso: string) => {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("pt-BR", { month: "short", year: "numeric" });
};

const idiomaLabel: Record<string, string> = {
  portugues: "Português", ingles: "Inglês", espanhol: "Espanhol",
  frances: "Francês", alemao: "Alemão", italiano: "Italiano",
  mandarim: "Mandarim", japones: "Japonês", coreano: "Coreano",
  arabe: "Árabe", russo: "Russo",
};

const nivelLabel: Record<string, string> = {
  basico: "Básico", intermediario: "Intermediário", avancado: "Avançado",
  fluente: "Fluente / Proficiência", nativo: "Nativo",
};

const nivelFormacaoLabel: Record<string, string> = {
  fundamental: "Ensino Fundamental", medio: "Ensino Médio",
  tecnico: "Ensino Técnico", superior: "Ensino Superior",
  posgraduacao: "Pós-Graduação", mestrado: "Mestrado", doutorado: "Doutorado",
};

const nivelExperienciaLabel: Record<string, string> = {
  basico: "Básico", intermediario: "Intermediário", avancado: "Avançado",
};

const agroNomeLabel: Record<string, string> = {
  plantio: "Plantio", colheita: "Colheita", pulverizacao: "Pulverização",
  preparo_solo: "Preparo do solo", irrigacao: "Irrigação", adubacao: "Adubação / Fertilização",
  colheita_mecanizada: "Colheita mecanizada",
  manejo_bovinos: "Manejo de bovinos", manejo_aves: "Manejo de aves", manejo_suinos: "Manejo de suínos",
  ordenha: "Ordenha", vacinacao: "Vacinação", nutricao_animal: "Nutrição animal",
  plantio_florestal: "Plantio florestal", corte_colheita_madeira: "Corte / colheita de madeira",
  manejo_florestal: "Manejo florestal", viveiro_florestal: "Viveiro florestal",
  controle_pragas_florestais: "Controle de pragas florestais",
  soja: "Soja", milho: "Milho", cafe: "Café", cana_de_acucar: "Cana-de-açúcar",
  algodao: "Algodão", arroz: "Arroz", feijao: "Feijão", trigo: "Trigo",
  hortalicas: "Hortaliças", fruticultura: "Fruticultura",
  trator: "Trator", colheitadeira: "Colheitadeira", pulverizador: "Pulverizador",
  plantadeira: "Plantadeira", semeadora: "Semeadora", rocadeira: "Roçadeira",
  caminhao_carreta_agricola: "Caminhão / carreta agrícola",
  agricultura_precisao: "Agricultura de precisão", gps_piloto_automatico: "GPS / piloto automático",
  drones_agricolas: "Drones agrícolas", sensoriamento_remoto: "Sensoriamento remoto",
  softwares_gestao_agricola: "Softwares de gestão agrícola", irrigacao_automatizada: "Irrigação automatizada",
  outro: "Outro",
};

function AgroSectionView({ icon, title, items, emptyMessage }: { icon: any; title: string; items: any[]; emptyMessage: string }) {
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

function SectionTitle({ icon: Icon, title }: { icon: any; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <Icon className="w-5 h-5 text-deepGreen shrink-0" />
      <h2 className="text-lg font-medium text-deepGreen">{title}</h2>
      <hr className="flex-1 border-deepGreen opacity-30" />
    </div>
  );
}

function EmptySection({ message }: { message: string }) {
  return (
    <p className="text-gray-400 text-sm italic py-2">{message}</p>
  );
}

type Props = {
  onCreate?: () => void;
  onImport?: () => void;
};

export default function CurriculumView({ onCreate, onImport }: Props) {
  const { curriculum, existCurriculum } = useCurriculum();
  const { UserData } = useUser();
  const { user } = UserData;

  const addr = user.Address;
  const location = [addr?.city, addr?.state].filter(Boolean).join(" — ");

  if (!existCurriculum) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-8 sm:py-12 px-4 sm:px-8 font-SecondFont text-center gap-4">
        <Star className="w-12 h-12 text-deepGreen opacity-40" aria-hidden="true" />
        <h1 className="text-xl text-gray-600">Seu currículo ainda não foi criado.</h1>
        <p className="text-gray-500 text-sm mb-2">
          Comece do zero ou importe um currículo em PDF pra preencher tudo automaticamente.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onCreate}
            className="flex items-center justify-center gap-2 bg-deepGreen text-white px-6 py-3 rounded-xl font-medium hover:bg-mediumGreen transition-colors duration-200"
          >
            <FilePlus2 size={18} aria-hidden="true" />
            Fazer meu currículo
          </button>
          <button
            onClick={onImport}
            className="flex items-center justify-center gap-2 border border-deepGreen text-deepGreen px-6 py-3 rounded-xl font-medium hover:bg-deepGreen hover:text-white transition-colors duration-200"
          >
            <Upload size={18} aria-hidden="true" />
            Importar PDF
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100 font-SecondFont">

      {/* Cabeçalho */}
      <div className="bg-paleGreen/40 border border-paleGreen rounded-xl p-6 mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-deepGreen">{user.name || "—"}</h1>
        <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3 text-sm text-gray-600">
          {user.email && (
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4" /> {user.email}
            </span>
          )}
          {user.phone && (
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4" /> {user.phone}
            </span>
          )}
          {location && (
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" /> {location}
            </span>
          )}
        </div>
        {user.disablePerson === "Sim" && (
          <span className="inline-block mt-3 text-xs px-2 py-1 bg-deepGreen text-white rounded-full">
            PcD
          </span>
        )}
      </div>

      {/* Informações Pessoais */}
      <div className="mb-8">
        <SectionTitle icon={User} title="Informações Pessoais" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
          {user.dateNasc && (
            <div>
              <span className="text-gray-400 block text-xs mb-1">Data de Nascimento</span>
              {new Date(user.dateNasc).toLocaleDateString("pt-BR")}
            </div>
          )}
          {user.gender && (
            <div>
              <span className="text-gray-400 block text-xs mb-1">Gênero</span>
              {user.gender}
            </div>
          )}
          {addr && (
            <div>
              <span className="text-gray-400 block text-xs mb-1">Endereço</span>
              {[addr.street, addr.number, addr.district, addr.city, addr.state].filter(Boolean).join(", ")}
            </div>
          )}
        </div>
      </div>

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

      </div>
    </div>
  );
}
