import { InputBlock } from 'components/input-block';
import { InputRadio } from 'components/input-radio';
import { Button } from 'components/button';

import { createElement } from 'utils/create-element';
import { formValidation } from 'utils/validation';
import type { FieldValidationType } from 'utils/validation';

function setInputValidity(type: FieldValidationType, $input: HTMLInputElement) {
  const error = formValidation(type)($input);
  $input.setCustomValidity(error ?? '');
}

function handleInput(event: Event) {
  (event.currentTarget as HTMLInputElement).setCustomValidity('');
}

function handleBlur(type: FieldValidationType) {
  return (event: Event) => {
    setInputValidity(type, event.currentTarget as HTMLInputElement);
  };
}

function handleSubmit(event: Event) {
  event.preventDefault();

  const $form = event.currentTarget as HTMLFormElement;

  Array.from($form.elements).forEach(($element) => {
    if (isInput($element)) {
      setInputValidity(
        $element.name as FieldValidationType,
        $element as HTMLInputElement
      );
    }
  });
}

function GenderRadios() {
  const $container = createElement('div', {
    class: 'radios-container'
  });

  const radioFem = InputRadio({
    label: 'Feminino',
    name: 'gender',
    value: 'F',
    checked: true
  });

  const radioMasc = InputRadio({
    label: 'Masculino',
    name: 'gender',
    value: 'M'
  });

  $container.append(radioMasc.$label, radioFem.$label);

  return $container;
}

function AlgorithmForm() {
  const $form = createElement('form', { class: 'algorithm-form' });
  const $button = Button({ type: 'submit', full: true, children: 'Enviar' });
  const inputCpf = InputBlock({ label: 'CPF:', name: 'cpf' });
  const inputName = InputBlock({
    label: 'Nome:',
    name: 'name'
  });
  const inputEmail = InputBlock({
    label: 'E-mail:',
    type: 'email',
    name: 'email'
  });
  const $gendersRadios = GenderRadios();

  inputName.$input.addEventListener('input', handleInput);
  inputEmail.$input.addEventListener('input', handleInput);
  inputCpf.$input.addEventListener('input', handleInput);

  inputName.$input.addEventListener('blur', handleBlur('name'));
  inputEmail.$input.addEventListener('blur', handleBlur('email'));
  inputCpf.$input.addEventListener('blur', handleBlur('cpf'));

  $form.append(
    inputName.$block,
    inputEmail.$block,
    inputCpf.$block,
    $gendersRadios,
    $button
  );

  $form.addEventListener('submit', handleSubmit);

  return $form;
}

function isInput($element: Element): $element is HTMLInputElement {
  return !!($element as HTMLInputElement)?.name;
}

export { AlgorithmForm };
