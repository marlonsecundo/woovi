export function formatCPF(v: string) {
  if (v.length > 14) return v.substring(0, 14);

  v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
  v = v.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
  v = v.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
  //de novo (para o segundo bloco de números)
  v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos

  return v;
}
export function formatDate(inputText: string) {
  inputText = inputText.replace(/\D/g, "");
  inputText = inputText.substring(0, 4);

  let month = inputText.slice(0, 2);
  let day = inputText.slice(2);
  return `${month}/${day}`;
}

export function formatCVV(v: string) {
  return v.replace(/\D/g, "").substring(0, 3);
}
