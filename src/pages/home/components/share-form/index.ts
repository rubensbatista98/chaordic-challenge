import { InputBlock } from 'components/input-block';
import { Button } from 'components/button';

import { createElement } from 'utils/create-element';
import { isInput, clearCustomValidity, validateInput } from 'utils/helpers';
import type { FieldValidationType } from 'utils/validation';

import './styles.css';

function ShareForm() {
  const $inputsContainer = createElement('div', { class: 'inputs-container' });
  const $form = createElement('form', {
    class: 'share-form',
    children: Button({ type: 'submit', children: 'Enviar agora' })
  });

  const inputName = InputBlock({
    label: 'Nome do seu amigo:',
    name: 'friend-name'
  });

  const inputEmail = InputBlock({
    label: 'E-mail:',
    name: 'friend-email',
    type: 'email'
  });

  function handleInput(event: Event) {
    clearCustomValidity(event.currentTarget as HTMLInputElement);
  }

  function handleBlur(type: FieldValidationType) {
    return (event: Event) => {
      validateInput(type, event.currentTarget as HTMLInputElement);
    };
  }

  function handleSubmit(event: Event) {
    event.preventDefault();

    const $form = event.currentTarget as HTMLFormElement;

    Array.from($form.elements).forEach(($element) => {
      if (isInput($element)) {
        let type: FieldValidationType | undefined;

        if ($element.name === 'friend-name') {
          type = 'name';
        }

        if ($element.name === 'friend-email') {
          type = 'email';
        }

        if (type) {
          validateInput(type, $element);
        }
      }
    });
  }

  inputName.$input.addEventListener('input', handleInput);
  inputEmail.$input.addEventListener('input', handleInput);

  inputName.$input.addEventListener('blur', handleBlur('name'));
  inputEmail.$input.addEventListener('blur', handleBlur('email'));

  $form.addEventListener('submit', handleSubmit);

  $inputsContainer.append(inputName.$block, inputEmail.$block);
  $form.prepend($inputsContainer);

  return $form;
}

export { ShareForm };
