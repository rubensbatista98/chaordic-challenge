import { AppHeader } from 'components/app-header';
import { AppFooter } from 'components/app-footer';

import { Navigation } from './components/navigation';
import { AlgorithmSection } from './components/algorithm-section';
import { SpecialSection } from './components/special-section';
import { ShareSection } from './components/share-section';

function Home() {
  const fragment = document.createDocumentFragment();
  const $navigation = Navigation();

  fragment.append(
    AppHeader({ children: $navigation }),
    AlgorithmSection(),
    SpecialSection(),
    ShareSection(),
    AppFooter()
  );

  return fragment;
}

export { Home };
