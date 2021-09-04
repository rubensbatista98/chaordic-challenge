import type { ButtonProps } from '.';

function createLoader() {
  return `
    <div class="loader">
      <span class="circle"></span>
      <span class="circle"></span>
      <span class="circle"></span>
    </div>
  `;
}

function addLoadingObserver(
  $button: HTMLElement,
  children: ButtonProps['children']
) {
  new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type !== 'attributes') return;

      const $button = mutation.target as HTMLButtonElement;
      const isLoading = typeof $button.dataset.loading === 'string';

      if (isLoading) {
        $button.innerHTML = createLoader();
        $button.setAttribute('aria-label', 'Carregando');

        return;
      }

      $button.removeAttribute('aria-label');

      if (typeof children === 'string') {
        $button.innerHTML = children;
      } else {
        $button.appendChild(children);
      }
    });
  }).observe($button, { attributeFilter: ['data-loading'] });
}

export { addLoadingObserver, createLoader };
