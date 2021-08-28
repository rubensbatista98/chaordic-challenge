import './styles.css';

function AppFooter() {
  const $footer = document.createElement('footer');
  $footer.className = 'app-footer';

  $footer.insertAdjacentHTML(
    'afterbegin',
    `
      <p>Testando suas habilidades em HTML, CSS e JS.</p>
      <p>Linx Impulse</p>
      <p>2019</p>
    `
  );

  return $footer;
}

export { AppFooter };
