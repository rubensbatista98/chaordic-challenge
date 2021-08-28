import { AppHeader } from 'components/app-header';

import { Navigation } from './components/navigation';
import { AlgorithmSection } from './components/algorithm-section';
import { SpecialSection } from './components/special-section';
import { ShareSection } from './components/share-section';

function Home() {
  const fragment = document.createDocumentFragment();

  const $navigation = Navigation();
  const $header = AppHeader({ children: $navigation });

  const $algorithmSection = AlgorithmSection();
  const $specialSection = SpecialSection();
  const $shareSection = ShareSection();

  fragment.appendChild($header);
  fragment.appendChild($algorithmSection);
  fragment.appendChild($specialSection);
  fragment.appendChild($shareSection);

  return fragment;
}

export { Home };
