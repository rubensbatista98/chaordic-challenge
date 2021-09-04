import { validateName } from './validate-name';
import { validateEmail } from './validate-email';
import { validateCpf } from './validate-cpf';

export type FieldValidationType = 'name' | 'email' | 'cpf';
export type FnValidation = (value: string) => string | null;

const fieldsValidations: Record<FieldValidationType, FnValidation> = {
  name: validateName,
  cpf: validateCpf,
  email: validateEmail
};

function formValidation(type: FieldValidationType) {
  const fieldValidation = fieldsValidations[type];

  return ($input: HTMLInputElement) => {
    if (fieldValidation) return fieldValidation($input.value);

    return;
  };
}

export { formValidation };
