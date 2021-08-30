import { createElement } from 'utils/create-element';

import './styles.css';

function AppFooter() {
  const $footer = createElement('footer', {
    class: 'app-footer',
    children: `
      <p>Testando suas habilidades em HTML, CSS e JS.</p>

      <p>
        <span>Linx Impulse</span>
        <span>2019</span>
      </p>
    `
  });

  return $footer;
}

export { AppFooter };
