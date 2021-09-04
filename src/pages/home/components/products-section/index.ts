import { Button } from 'components/button';
import { ProductCard } from 'components/product-card';
import { SuccessModal } from 'components/success-modal';
import { createElement } from 'utils/create-element';
import { getProducts } from 'services/api/products';

import type { Product } from 'types/product';

import './styles.css';

function insertProductsIntoDom(products: Product[]) {
  const $productsList = document.querySelector('[data-products]');

  if ($productsList === null) return;

  const $cards = products.map(ProductCard);
  const $firstCardButton = $cards[0].querySelector('button')!;
  const isPaginatedProducts = $productsList.childElementCount > 0;

  $cards.forEach(($card) => {
    const $button = $card.querySelector('button');

    $button?.addEventListener('click', () => {
      SuccessModal({ message: 'Obrigado por comprar conosco!' }).open();
    });
  });

  $productsList.append(...$cards);

  if (isPaginatedProducts) {
    $firstCardButton.focus();
    $cards[0].scrollIntoView();
  }
}

function handleNextPageOrRemoveButton(
  $button: HTMLButtonElement,
  nextPage?: typeof getProducts | null
) {
  if (nextPage) {
    $button.removeAttribute('data-loading');
    $button.addEventListener('click', handleSeeMore(nextPage), {
      once: true
    });

    return;
  }

  $button.remove();
}

function handleSeeMore(getMoreProducts: typeof getProducts) {
  return async (event: MouseEvent) => {
    const $button = event.target as HTMLButtonElement;
    $button.dataset.loading = '';

    const { products, nextPage } = await getMoreProducts();

    insertProductsIntoDom(products);
    handleNextPageOrRemoveButton($button, nextPage);
  };
}

function ProductsSection() {
  const $productsList = createElement('div', {
    class: 'products-list',
    'data-products': '',
    'aria-atomic': 'true',
    'aria-live': 'true'
  });

  const $buttonMore = Button({
    class: 'button-more',
    variant: 'secondary',
    'data-loading': '',
    children: 'Ainda mais produtos aqui!'
  });

  const $section = createElement('section', {
    id: 'products-section',
    class: 'home-section',
    'aria-busy': 'true',
    children: '<h2 class="title">Sua seleção especial</h2>'
  });

  getProducts().then(({ products, nextPage }) => {
    insertProductsIntoDom(products);
    handleNextPageOrRemoveButton($buttonMore, nextPage);
  });

  $section.append($productsList, $buttonMore);

  return $section;
}

export { ProductsSection };
