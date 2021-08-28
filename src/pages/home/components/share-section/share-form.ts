import { InputBlock } from 'components/input-block';

function ShareForm() {
  const $form = document.createElement('form');
  const $inputsContainer = document.createElement('div');

  $form.className = 'share-form';
  $inputsContainer.className = 'inputs-container';

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
