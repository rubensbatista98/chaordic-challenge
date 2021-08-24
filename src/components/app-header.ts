import 'styles/components/app-header.css';

export type AppHeaderProps = {
  children?: HTMLElement | DocumentFragment;
};

function AppHeader({ children }: AppHeaderProps = {}) {
  const $header = document.createElement('header');
  $header.className = 'app-header';

  $header.insertAdjacentHTML(
    'afterbegin',
    `
      <h1 class="title">
        <span>uma seleção de produtos</span>
        especial para você
      </h1>

      <h2 class="subtitle">
        Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!
      </h2>
    `
  );

  if (children) {
    $header.appendChild(children);
  }

  return $header;
}

export { AppHeader };
