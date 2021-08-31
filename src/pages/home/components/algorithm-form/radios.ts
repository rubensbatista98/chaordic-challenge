import { InputRadio } from 'components/input-radio';
import { createElement } from 'utils/create-element';

function RadiosWrapper() {
  const $wrapper = createElement('div', {
    class: 'radios-wrapper'
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

  $wrapper.append(radioMasc.$label, radioFem.$label);

  return $wrapper;
}

export { RadiosWrapper };
