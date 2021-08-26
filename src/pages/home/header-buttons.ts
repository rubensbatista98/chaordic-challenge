function createButton(text: string) {
  const $button = document.createElement('a');

  $button.className = 'button';
  $button.textContent = text;

  $button.setAttribute('href', '#');

  return $button;
}

function HeaderButtons() {
  const buttonsText = [
    'Conheça a Linx',
    'Ajude o algorítimo',
    'Seus produtos',
    'Compartilhe'
  ];

  const $container = document.createElement('div');
  $container.className = 'header-buttons';

  buttonsText
    .map(createButton)
    .forEach(($button) => $container.appendChild($button));

  return $container;
}

export { HeaderButtons };
