import { createElement } from 'utils/create-element';

import './styles.css';

type InputBlockProps = {
  label?: string;
  type?: string;
  name: string;
  required?: boolean;
} & Record<string, any>;

function InputBlock(props: InputBlockProps) {
  const { label, name, type = 'text', required = false, ...rest } = props;

  const $block = createElement('div', {
    class: 'input-block'
  });
  const $input = createElement('input', {
    name,
    type,
    id: name,
    'aria-required': required ? 'true' : 'false',
    ...rest
  });

  if (required) {
    $block.dataset.required = '';
  }

  if (label) {
    const $label = createElement('label', { for: name, children: label });
    $block.appendChild($label);
  }

  $block.appendChild($input);

  return { $block, $input };
}

export { InputBlock };
