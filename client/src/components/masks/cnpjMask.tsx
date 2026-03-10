export const cnpjMask = (value: string) => {
  return value
    .replace(/\D/g, "") // remove tudo que não for dígito
    .replace(/^(\d{2})(\d)/, "$1.$2") // coloca ponto após os dois primeiros dígitos
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3") // coloca outro ponto após os três dígitos seguintes
    .replace(/\.(\d{3})\.(\d{3})(\d)/, ".$1.$2/$3") // coloca barra após mais três dígitos
    .replace(/(\d{4})(\d)/, "$1-$2") // coloca hífen após os quatro dígitos seguintes
    .replace(/(-\d{2})\d+?$/, "$1"); // limita a dois dígitos após o hífen
};
