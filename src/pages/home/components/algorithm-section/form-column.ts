import { AlgorithmForm } from './algorithm-form';

function FormColumn() {
  const $column = document.createElement('div');
  const $form = AlgorithmForm();

  $column.appendChild($form);

  return $column;
}

export { FormColumn };
