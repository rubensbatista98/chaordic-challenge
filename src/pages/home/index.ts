import 'styles/pages/home.css';

import { AppHeader } from 'components/app-header';

import { HeaderButtons } from './header-buttons';

function Home() {
  const fragment = document.createDocumentFragment();

  const $headerButtons = HeaderButtons();
  const $header = AppHeader({ children: $headerButtons });

  fragment.appendChild($header);

  return fragment;
}

export { Home };
