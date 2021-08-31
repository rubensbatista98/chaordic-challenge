import { isEmpty } from './is-empty';

function validateName(name: string) {
  if (isEmpty(name)) return 'Nome é obrigatório';

  const hasLessThan2Char = name.trim().length < 2;

  if (hasLessThan2Char) return 'Nome deve ter mais de 2 letras';

  return null;
}

export { validateName };
