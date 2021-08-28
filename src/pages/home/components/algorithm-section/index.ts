import './styles.css';

import { createElement } from 'utils/create-element';

import { InfoColumn } from './info-column';
import { FormColumn } from './form-column';

function AlgorithmSection() {
  const $algorithmSection = createElement('section', {
    class: 'algorithm-section'
  });

  const $infoColumn = InfoColumn();
  const $formColumn = FormColumn();

  $algorithmSection.appendChild($infoColumn);
  $algorithmSection.appendChild($formColumn);

  return $algorithmSection;
}

export { AlgorithmSection };
