import './styles.css';

import { createElement } from 'utils/create-element';

import { InfoColumn } from './info-column';
import { AlgorithmForm } from './algorithm-form';

function AlgorithmSection() {
  const $algorithmSection = createElement('section', {
    id: 'algorithm-section',
    children: InfoColumn()
  });

  const $formColumn = createElement('div', {
    children: AlgorithmForm()
  });

  $algorithmSection.appendChild($formColumn);

  return $algorithmSection;
}

export { AlgorithmSection };
