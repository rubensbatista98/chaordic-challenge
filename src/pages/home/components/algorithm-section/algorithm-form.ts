import { InputBlock } from 'components/input-block';

type InputRadioProps = {
  label: string;
  id: string;
};

function FormInputs() {
  const fragment = document.createDocumentFragment();

  const inputsData = [
    { label: 'Name:', name: 'name' },
    { label: 'CPF:', name: 'cpf' },
    { label: 'E-mail:', type: 'email', name: 'email' }
  ];

  inputsData
    .map(InputBlock)
    .forEach(({ $block }) => fragment.appendChild($block));

  return fragment;
}

function InputRadio({ label, id }: InputRadioProps) {
  const $input = document.createElement('input');

  $input.type = 'radio';
  $input.name = 'gender';
  $input.id = id;
  $input.value = id;

  const $label = document.createElement('label');

  $label.textContent = label;
  $label.setAttribute('for', id);

  $label.prepend($input);

  return $label;
}

function GenderRadios() {
  const $container = document.createElement('div');
  $container.className = 'radios-container';

  const radiosData = [
    { label: 'Masculino', id: 'masc' },
    { label: 'Masculino', id: 'fem' }
  ];

  radiosData
    .map(InputRadio)
    .forEach(($radio) => $container.appendChild($radio));

  return $container;
}

function AlgorithmForm() {
  const $form = document.createElement('form');
  const $button = document.createElement('button');

  const $inputs = FormInputs();
  const $gendersRadios = GenderRadios();

  $button.type = 'submit';
  $button.textContent = 'Enviar';
  $button.className = 'button';

  $form.className = 'algorithm-form';

  $form.appendChild($inputs);
  $form.appendChild($gendersRadios);
  $form.appendChild($button);

  return $form;
}

export { AlgorithmForm };
