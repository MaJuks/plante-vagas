/**
 * Normaliza texto pra comparação de busca: remove acentos e diacríticos,
 * deixa minúsculo. "Veterinário" e "veterinario" viram a mesma coisa.
 */
export function normalizeText(texto: string): string {
  return Array.from(texto.normalize("NFD"))
    .filter((char) => {
      const code = char.codePointAt(0) ?? 0;
      // faixa dos diacríticos combinantes (acentos separados pelo NFD)
      return code < 0x0300 || code > 0x036f;
    })
    .join("")
    .toLowerCase();
}
