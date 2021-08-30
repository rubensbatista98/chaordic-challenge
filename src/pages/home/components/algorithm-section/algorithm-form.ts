import { InputBlock } from 'components/input-block';
import { InputRadio } from 'components/input-radio';
import { Button } from 'components/button';
import { createElement } from 'utils/create-element';

function FormInputs() {
  const fragment = document.createDocumentFragment();

  const inputsData = [
    { label: 'Nome:', name: 'name' },
    { label: 'CPF:', name: 'cpf' },
    { label: 'E-mail:', type: 'email', name: 'email' }
  ];

  inputsData
    .map(InputBlock)
    .forEach(({ $block }) => fragment.appendChild($block));

  return fragment;
}

function GenderRadios() {
  const $container = createElement('div', {
    class: 'radios-container'
  });

  const radiosData = [
    { label: 'Masculino', name: 'gender', id: 'masc' },
    { label: 'Feminino', name: 'gender', id: 'fem' }
  ];

  radiosData
    .map(InputRadio)
    .forEach((radio) => $container.appendChild(radio.$label));

  return $container;
}

function AlgorithmForm() {
  const $form = createElement('form', { class: 'algorithm-form' });
  const $button = Button({ type: 'submit', full: true, children: 'Enviar' });

  const $inputs = FormInputs();
  const $gendersRadios = GenderRadios();

  $form.appendChild($inputs);
  $form.appendChild($gendersRadios);
  $form.appendChild($button);

  return $form;
}

export { AlgorithmForm };
