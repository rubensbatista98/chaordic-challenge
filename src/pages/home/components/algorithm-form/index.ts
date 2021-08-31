import { InputBlock } from 'components/input-block';
import { Button } from 'components/button';

import { createElement } from 'utils/create-element';
import { isInput, validateInput } from 'utils/helpers';
import type { FieldValidationType } from 'utils/validation';

import { RadiosWrapper } from './radios';
import './styles.css';

function AlgorithmForm() {
  const $form = createElement('form', { class: 'algorithm-form' });
  const $button = Button({ type: 'submit', full: true, children: 'Enviar' });
  const $gendersRadios = RadiosWrapper();

  const inputCpf = InputBlock({ label: 'CPF:', name: 'cpf', required: true });
  const inputName = InputBlock({
    label: 'Nome:',
    name: 'name',
    required: true
  });
  const inputEmail = InputBlock({
    label: 'E-mail:',
    type: 'email',
    name: 'email',
    required: true
  });

  function handleInput(event: Event) {
    (event.currentTarget as HTMLInputElement).setCustomValidity('');
  }

  function handleBlur(type: FieldValidationType) {
    return (event: Event) => {
      validateInput(type, event.currentTarget as HTMLInputElement);
    };
  }

  function handleSubmit(event: Event) {
    event.preventDefault();

    const $form = event.currentTarget as HTMLFormElement;

    Array.from($form.elements).forEach(($element) => {
      if (isInput($element)) {
        validateInput(
          $element.name as FieldValidationType,
          $element as HTMLInputElement
        );
      }
    });
  }

  inputName.$input.addEventListener('input', handleInput);
  inputEmail.$input.addEventListener('input', handleInput);
  inputCpf.$input.addEventListener('input', handleInput);

  inputName.$input.addEventListener('blur', handleBlur('name'));
  inputEmail.$input.addEventListener('blur', handleBlur('email'));
  inputCpf.$input.addEventListener('blur', handleBlur('cpf'));

  $form.addEventListener('submit', handleSubmit);

  $form.append(
    inputName.$block,
    inputEmail.$block,
    inputCpf.$block,
    $gendersRadios,
    $button
  );

  return $form;
}

export { AlgorithmForm };
