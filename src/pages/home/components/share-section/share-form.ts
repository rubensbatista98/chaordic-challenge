import { InputBlock } from 'components/input-block';
import { createElement } from 'utils/create-element';

function ShareForm() {
  const $form = createElement('form', { class: 'share-form' });
  const $inputsContainer = createElement('div', { class: 'inputs-container' });

  const inputName = InputBlock({
    label: 'Nome do seu amigo:',
    name: 'friend-name'
  });

  const inputEmail = InputBlock({
    label: 'E-mail:',
    name: 'friend-email'
  });

  $inputsContainer.appendChild(inputName.$block);
  $inputsContainer.appendChild(inputEmail.$block);
  $form.appendChild($inputsContainer);

  $form.insertAdjacentHTML(
    'beforeend',
    `
      <button class="button">Enviar agora</button>
    `
  );

  return $form;
}

export { ShareForm };
