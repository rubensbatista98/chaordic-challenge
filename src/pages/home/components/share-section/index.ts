import { SuccessModal } from 'components/success-modal';
import { createElement } from 'utils/create-element';

import { ShareForm } from '../share-form';

import './styles.css';

function ShareSection() {
  const successModal = SuccessModal({ message: 'Obrigado por compartilhar!' });

  const $section = createElement('section', {
    id: 'share-section',
    class: 'home-section',
    children: `
      <h2 class="title">Compartilhe a novidade</h2>

      <p class="info">
        Quer que seus amigos também ganhem a lista personalizada deles?
        Preencha agora!
      </p>
    `
  });

  $section.appendChild(ShareForm({ onSuccess: successModal.open }));

  return $section;
}

export { ShareSection };
