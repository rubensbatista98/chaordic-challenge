import { InputBlock } from 'components/input-block';
import { createElement } from 'utils/create-element';

function ShareForm() {
  const $inputsContainer = createElement('div', { class: 'inputs-container' });
  const $form = createElement('form', {
    class: 'share-form',
    children: `
      <button class="button">Enviar agora</button>
    `
  });

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
  $form.prepend($inputsContainer);

  return $form;
}

export { ShareForm };
