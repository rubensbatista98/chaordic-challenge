import { createElement } from 'utils/create-element';

import { ShareForm } from './share-form';

import './styles.css';

function ShareSection() {
  const $section = createElement('section', {
    class: 'home-section share-section',
    children: `
      <h2 class="title">Compartilhe a novidade</h2>

      <p class="info">
        Quer que seus amigos também ganhem a lista personalizada deles?
        Preencha agora!
      </p>
    `
  });

  $section.appendChild(ShareForm());

  return $section;
}

export { ShareSection };
