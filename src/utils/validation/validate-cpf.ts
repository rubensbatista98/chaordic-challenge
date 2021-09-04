import { isEmpty } from './is-empty';

function validateCpf(cpf: string) {
  if (isEmpty(cpf)) return 'CPF é obrigatório';

  const hasInvalidQuantity = cpf.length !== 11;
  const hasInvalidChar = cpf.split('').every((number) => isNaN(Number(number)));

  if (hasInvalidQuantity || hasInvalidChar) return 'CPF inválido';

  return null;
}

export { validateCpf };
