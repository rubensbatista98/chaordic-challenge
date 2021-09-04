import { SuccessModal } from 'components/success-modal';
import { createElement } from 'utils/create-element';

import { AlgorithmForm } from '../algorithm-form';
import { InfoColumn } from './info-column';
import './styles.css';

function AlgorithmSection() {
  const successModal = SuccessModal({ message: 'Obrigado por se cadastrar!' });

  const $algorithmSection = createElement('section', {
    id: 'algorithm-section',
    children: InfoColumn()
  });
  const $formColumn = createElement('div', {
    children: AlgorithmForm({ onSuccess: successModal.open })
  });

  $algorithmSection.appendChild($formColumn);

  return $algorithmSection;
}

export { AlgorithmSection };
