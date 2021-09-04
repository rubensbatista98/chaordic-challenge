import { Button } from 'components/button';

import { createElement } from 'utils/create-element';

import './styles.css';

const LINKS_DATA = [
  {
    content: 'Conheça a Linx',
    href: 'https://www.linx.com.br/quem-somos/',
    target: '_blank'
  },
  { content: 'Ajude o algorítmo', href: '#algorithm-section' },
  { content: 'Seus produtos', href: '#products-section' },
  { content: 'Compartilhe', href: '#share-section' }
];

function Navigation() {
  const $navigation = createElement('nav', { class: 'navigation' });

  LINKS_DATA.forEach(({ content, ...rest }) => {
    $navigation.appendChild(
      Button<HTMLAnchorElement>({
        class: 'link',
        asLink: true,
        variant: 'secondary',
        full: true,
        children: content,
        ...rest
      })
    );
  });

  return $navigation;
}

export { Navigation };
