import { formValidation } from 'utils/validation';
import type { FieldValidationType } from 'utils/validation';

function isInput($element: Element): $element is HTMLInputElement {
  return !!($element as HTMLInputElement)?.name;
}

function clearCustomValidity($input: HTMLInputElement) {
  $input.setCustomValidity('');
}

function validateInput(type: FieldValidationType, $input: HTMLInputElement) {
  const error = formValidation(type)($input);
  $input.setCustomValidity(error ?? '');
}

export { isInput, clearCustomValidity, validateInput };
