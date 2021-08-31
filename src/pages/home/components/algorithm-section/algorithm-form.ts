import { InputBlock } from 'components/input-block';
import { InputRadio } from 'components/input-radio';
import { Button } from 'components/button';

import { createElement } from 'utils/create-element';
import { formValidation } from 'utils/validation';

function setInputValidity($input: HTMLInputElement) {
  const error = formValidation($input);
  $input.setCustomValidity(error ?? '');
}

function handleInput(event: Event) {
  (event.currentTarget as HTMLInputElement).setCustomValidity('');
}

function handleBlur(event: Event) {
  setInputValidity(event.currentTarget as HTMLInputElement);
}

function handleSubmit(event: Event) {
  event.preventDefault();

  const $form = event.currentTarget as HTMLFormElement;

  Array.from($form.elements).forEach(($element) => {
    setInputValidity($element as HTMLInputElement);
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

  inputName.$input.addEventListener('blur', handleBlur);
  inputEmail.$input.addEventListener('blur', handleBlur);
  inputCpf.$input.addEventListener('blur', handleBlur);

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

export { AlgorithmForm };
