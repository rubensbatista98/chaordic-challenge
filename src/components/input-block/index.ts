import { createElement } from 'utils/create-element';

import './styles.css';

type InputBlockProps = {
  label?: string;
  type?: string;
  name: string;
} & Record<string, any>;

function InputBlock({ label, name, type = 'text', ...rest }: InputBlockProps) {
  const $block = createElement('div', { class: 'input-block' });
  const $input = createElement('input', { name, type, id: name, ...rest });

  if (label) {
    const $label = createElement('label', { for: name, children: label });
    $block.appendChild($label);
  }

  $block.appendChild($input);

  return { $block, $input };
}

export { InputBlock };
