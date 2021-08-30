import { Button } from 'components/button';

import { createElement } from 'utils/create-element';

import './styles.css';

const LINKS_TEXT = [
  'Conheça a Linx',
  'Ajude o algorítimo',
  'Seus produtos',
  'Compartilhe'
];
function Navigation() {
  const $navigation = createElement('nav', { class: 'navigation' });

  LINKS_TEXT.forEach((text) => {
    $navigation.appendChild(
      Button<HTMLAnchorElement>({
        class: 'link',
        asLink: true,
        href: '#',
        variant: 'secondary',
        full: true,
        children: text
      })
    );
  });

  return $navigation;
}

export { Navigation };
