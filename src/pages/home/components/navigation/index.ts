import { createElement } from 'utils/create-element';

import './styles.css';

function createLink(text: string) {
  const $link = createElement('a', {
    class: 'link',
    href: '#'
  });

  $link.textContent = text;

  return $link;
}

function Navigation() {
  const $navigation = createElement('nav', { class: 'navigation' });

  const linksText = [
    'Conheça a Linx',
    'Ajude o algorítimo',
    'Seus produtos',
    'Compartilhe'
  ];

  linksText.map(createLink).forEach(($link) => $navigation.appendChild($link));

  return $navigation;
}

export { Navigation };
