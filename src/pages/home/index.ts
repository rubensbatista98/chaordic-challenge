import 'styles/pages/home.css';

import { AppHeader } from 'components/app-header';

import { Navigation } from './navigation';
import { AlgorithmSection } from './algorithm-section';

function Home() {
  const fragment = document.createDocumentFragment();

  const $navigation = Navigation();
  const $header = AppHeader({ children: $navigation });

  const $algorithmSection = AlgorithmSection();

  fragment.appendChild($header);
  fragment.appendChild($algorithmSection);

  return fragment;
}

export { Home };
