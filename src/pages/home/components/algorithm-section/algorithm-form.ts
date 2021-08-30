import { InputBlock } from 'components/input-block';
import { Button } from 'components/button';
import { createElement } from 'utils/create-element';

type InputRadioProps = {
  label: string;
  id: string;
};

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

function InputRadio({ label, id }: InputRadioProps) {
  const $input = createElement('input', {
    type: 'radio',
    name: 'gender',
    id: id,
    value: id
  });

  const $label = createElement('label', {
    for: id,
    children: label
  });

  $label.prepend($input);

  return $label;
}

function GenderRadios() {
  const $container = createElement('div', {
    class: 'radios-container'
  });

  const radiosData = [
    { label: 'Masculino', id: 'masc' },
    { label: 'Feminino', id: 'fem' }
  ];

  radiosData
    .map(InputRadio)
    .forEach(($radio) => $container.appendChild($radio));

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
