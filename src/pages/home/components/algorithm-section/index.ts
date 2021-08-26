import './styles.css';

import { InfoColumn } from './info-column';
import { FormColumn } from './form-column';

function AlgorithmSection() {
  const $algorithmSection = document.createElement('section');
  $algorithmSection.className = 'algorithm-section';

  const $infoColumn = InfoColumn();
  const $formColumn = FormColumn();

  $algorithmSection.appendChild($infoColumn);
  $algorithmSection.appendChild($formColumn);

  return $algorithmSection;
}

export { AlgorithmSection };
