import { AppHeader } from 'components/app-header';

function Home() {
  const fragment = document.createDocumentFragment();

  fragment.appendChild(AppHeader());

  return fragment;
}

export { Home };
