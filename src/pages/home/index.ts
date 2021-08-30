import { AppHeader } from 'components/app-header';
import { AppFooter } from 'components/app-footer';
import { createElement } from 'utils/create-element';

import { Navigation } from './components/navigation';
import { AlgorithmSection } from './components/algorithm-section';
import { SpecialSection } from './components/special-section';
import { ShareSection } from './components/share-section';

import './styles.css';

function Home() {
  const fragment = document.createDocumentFragment();
  const $container = createElement('div', { class: 'container' });
  const $navigation = Navigation();

  $container.append(AlgorithmSection(), SpecialSection(), ShareSection());
  fragment.append(
    AppHeader({ children: $navigation }),
    $container,
    AppFooter()
  );

  return fragment;
}

export { Home };
