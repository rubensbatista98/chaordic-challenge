import { createElement } from 'utils/create-element';

import './styles.css';

const LINKS_TEXT = [
  'Conheça a Linx',
  'Ajude o algorítimo',
  'Seus produtos',
  'Compartilhe'
];

function createLink(text: string) {
  const $link = createElement('a', {
    class: 'link',
    href: '#',
    children: text
  });

  return $link;
}

function Navigation() {
  const $navigation = createElement('nav', { class: 'navigation' });

  LINKS_TEXT.map(createLink).forEach(($link) => $navigation.appendChild($link));

  return $navigation;
}

export { Navigation };
