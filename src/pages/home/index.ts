import { AppHeader } from 'components/app-header';

import { Navigation } from './components/navigation';
import { AlgorithmSection } from './components/algorithm-section';

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
