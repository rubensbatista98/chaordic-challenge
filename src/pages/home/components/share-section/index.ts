import './styles.css';

import { ShareForm } from './share-form';

function ShareSection() {
  const $section = document.createElement('section');
  const $shareForm = ShareForm();

  $section.className = 'share-section';
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
