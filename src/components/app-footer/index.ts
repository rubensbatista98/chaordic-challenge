import { createElement } from 'utils/create-element';

import './styles.css';

function AppFooter() {
  const $footer = createElement('footer', {
    class: 'app-footer',
    children: `
      <p>Testando suas habilidades em HTML, CSS e JS.</p>
      <p>Linx Impulse</p>
      <p>2019</p>
    `
  });

  return $footer;
}

export { AppFooter };
