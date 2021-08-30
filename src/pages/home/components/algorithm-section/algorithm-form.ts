import { InputBlock } from 'components/input-block';
import { InputRadio } from 'components/input-radio';
import { Button } from 'components/button';
import { createElement } from 'utils/create-element';

function FormInputs() {
  const fragment = document.createDocumentFragment();

  const inputName = InputBlock({ label: 'Nome:', name: 'name' });
  const inputCpf = InputBlock({ label: 'CPF:', name: 'cpf' });
  const inputEmail = InputBlock({
    label: 'E-mail:',
    type: 'email',
    name: 'email'
  });

  fragment.append(inputName.$block, inputCpf.$block, inputEmail.$block);

  return fragment;
}

function GenderRadios() {
  const $container = createElement('div', {
    class: 'radios-container'
  });

  const radioFem = InputRadio({ label: 'Feminino', name: 'gender', id: 'fem' });
  const radioMasc = InputRadio({
    label: 'Masculino',
    name: 'gender',
    id: 'masc'
  });

  $container.append(radioMasc.$label, radioFem.$label);

  return $container;
}

function AlgorithmForm() {
  const $form = createElement('form', { class: 'algorithm-form' });
  const $button = Button({ type: 'submit', full: true, children: 'Enviar' });
  const $inputs = FormInputs();
  const $gendersRadios = GenderRadios();

  $form.append($inputs, $gendersRadios, $button);

  return $form;
}

export { AlgorithmForm };
