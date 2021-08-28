import './styles.css';

import { createElement } from 'utils/create-element';

import { ShareForm } from './share-form';

function ShareSection() {
  const $shareForm = ShareForm();
  const $section = createElement('section', { class: 'share-section' });

  $section.appendChild($shareForm);
  $section.insertAdjacentHTML(
    'afterbegin',
    `
      <h2 class="title">Compartilhe a novidade</h2>

      <p class="info">
        Quer que seus amigos também ganhem a lista personalizada deles?
        Preencha agora!
      </p>
    `
  );

  return $section;
}

export { ShareSection };
