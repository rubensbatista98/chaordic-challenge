import { createElement } from 'utils/create-element';

import './styles.css';

type InputRadioProps = {
  label: string;
  name: string;
} & Record<string, any>;

function InputRadio({ label, name, ...rest }: InputRadioProps) {
  const $label = createElement('label', {
    class: 'radio-label',
    children: label
  });

  const $input = createElement('input', {
    type: 'radio',
    name,
    ...rest
  });

  $label.prepend($input);

  return { $label, $input };
}

export { InputRadio };
