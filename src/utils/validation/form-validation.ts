import { validateName } from './validate-name';
import { validateEmail } from './validate-email';
import { validateCpf } from './validate-cpf';

const fieldsValidations: Record<string, (value: string) => string | null> = {
  name: validateName,
  cpf: validateCpf,
  email: validateEmail
};

function formValidation($input: HTMLInputElement) {
  const fieldValidation = fieldsValidations[$input.name];

  if (fieldValidation) {
    return fieldValidation($input.value);
  }

  return;
}

export { formValidation };
