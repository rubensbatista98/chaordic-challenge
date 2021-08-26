import './styles.css';

function createLink(text: string) {
  const $link = document.createElement('a');

  $link.className = 'link';
  $link.textContent = text;

  $link.setAttribute('href', '#');

  return $link;
}

function Navigation() {
  const linksText = [
    'Conheça a Linx',
    'Ajude o algorítimo',
    'Seus produtos',
    'Compartilhe'
  ];

  const $navigation = document.createElement('nav');
  $navigation.className = 'navigation';

  linksText.map(createLink).forEach(($link) => $navigation.appendChild($link));

  return $navigation;
}

export { Navigation };
