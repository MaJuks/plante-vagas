export const formatDate = (iso?: string) => {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("pt-BR", { month: "short", year: "numeric" });
};

export const idiomaLabel: Record<string, string> = {
  portugues: "Português", ingles: "Inglês", espanhol: "Espanhol",
  frances: "Francês", alemao: "Alemão", italiano: "Italiano",
  mandarim: "Mandarim", japones: "Japonês", coreano: "Coreano",
  arabe: "Árabe", russo: "Russo",
};

export const nivelLabel: Record<string, string> = {
  basico: "Básico", intermediario: "Intermediário", avancado: "Avançado",
  fluente: "Fluente / Proficiência", nativo: "Nativo",
};

export const nivelFormacaoLabel: Record<string, string> = {
  fundamental: "Ensino Fundamental", medio: "Ensino Médio",
  tecnico: "Ensino Técnico", superior: "Ensino Superior",
  posgraduacao: "Pós-Graduação", mestrado: "Mestrado", doutorado: "Doutorado",
};

export const nivelExperienciaLabel: Record<string, string> = {
  basico: "Básico", intermediario: "Intermediário", avancado: "Avançado",
};

export const agroNomeLabel: Record<string, string> = {
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
