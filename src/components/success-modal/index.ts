import { Button } from 'components/button';
import { createElement } from 'utils/create-element';
import type { Props } from 'utils/create-element';
import SuccessIcon from 'assets/icons/success-icon.svg';

import './styles.css';

type ModalProps = Omit<Props, 'children'> & {
  message: string;
};

let id = 0;
const generateId = () => id++;

function SuccessModal({ message, ...rest }: ModalProps) {
  let $firstFocusableEl: HTMLElement | null;
  let $lastFocusableEl: HTMLElement | null;
  let $lastFocusedEl: HTMLElement | null;

  const MODAL_ID = generateId();

  const $successMessage = createElement('h2', {
    id: 'success-message',
    children: message
  });
  const $modal = createElement('div', {
    class: 'modal-dialog',
    id: `modal-${MODAL_ID}`,
    role: 'dialog',
    tabindex: '-1',
    'aria-modal': 'true',
    'aria-labelledby': 'success-message',
    children: $successMessage,
    ...rest
  });
  const $overlay = createElement('div', {
    class: 'modal-overlay',
    children: $modal
  });
  const $button = Button({
    variant: 'primary',
    class: 'button-success',
    children: 'Fechar'
  });

  $modal.appendChild($button);
  $modal.insertAdjacentHTML(
    'afterbegin',
    `<img class="success-icon" src="${SuccessIcon}" alt="" />`
  );

  function handleKeyDown(event: KeyboardEvent) {
    const isEscapeKey = event.key === 'Escape';

    if (isEscapeKey) {
      event.stopPropagation();
      close();
    }

    const isTabKey = event.key === 'Tab';
    const isLastFocusableElement = document.activeElement === $lastFocusableEl;

    if (isTabKey && isLastFocusableElement) {
      event.preventDefault();
      $firstFocusableEl?.focus();
    }
  }

  function close() {
    $overlay.removeEventListener('keydown', handleKeyDown);
    $overlay.parentNode?.removeChild($overlay);

    if ($lastFocusedEl) {
      $lastFocusedEl.focus();
    }
  }

  function open() {
    document.body.appendChild($overlay);

    const $focusablesEl = $modal.querySelectorAll(
      'button, [href], input, [tabindex="0"]'
    );

    $firstFocusableEl = $focusablesEl[0] as HTMLElement;
    $lastFocusableEl = $focusablesEl[$focusablesEl.length - 1] as HTMLElement;
    $lastFocusedEl = document.activeElement as HTMLElement | null;

    $firstFocusableEl.focus();

    $button.addEventListener('click', close, { once: true });

    $overlay.addEventListener('click', close, { once: true });
    $overlay.addEventListener('keydown', handleKeyDown);

    $modal.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

  return { $modal, open, close };
}

export { SuccessModal };
