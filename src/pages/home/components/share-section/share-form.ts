function ShareForm() {
  const $form = document.createElement('form');
  $form.className = 'share-form';

  $form.insertAdjacentHTML(
    'afterbegin',
    `
      <div class="inputs-container">
        <div class="input-block">
          <label for="friend-name">Nome do seu amigo:</label>
          <input type="text" id="friend-name" name="friend-name" />
        </div>

        <div class="input-block">
          <label for="friend-email">E-mail:</label>
          <input type="email" id="friend-email" name="friend-email" />
        </div>
      </div>

      <button class="button">Enviar agora</button>
    `
  );

  return $form;
}

export { ShareForm };
