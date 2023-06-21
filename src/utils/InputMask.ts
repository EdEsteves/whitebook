export const cardMasker = (creditCardNumber: string): string =>
  (creditCardNumber.replace(/[^0-9]/g, "").match(/.{1,4}/g)?.join(" ")?.substring(0, 19) || "");

export const expireDateMasker = (expirationDate: string): string =>
  (expirationDate.replace(/[^0-9]/g, "").match(/.{1,2}/g)?.join("/")?.substring(0, 5) || "");

export const cvvMasker = (cvv: string): string =>
  (cvv.replace(/[^0-9]/g, "").match(/.{1,3}/g)?.join("")?.substring(0, 3) || "");

export const cpfMasker = (cpf: string): string =>
  (cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4").substring(0, 14) || "");