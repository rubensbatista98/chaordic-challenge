import { Button } from 'components/button';
import { ProductCard } from 'components/product-card';
import { createElement } from 'utils/create-element';
import { getProducts } from 'services/api/products';

import './styles.css';

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

  getProducts().then(({ products }) => {
    $productsList.append(...products.map(ProductCard));
    $buttonMore.removeAttribute('data-loading');
  });

  $section.append($productsList, $buttonMore);

  return $section;
}

export { ProductsSection };
