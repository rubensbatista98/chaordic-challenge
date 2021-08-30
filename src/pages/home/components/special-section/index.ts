import { Button } from 'components/button';
import { ProductCard } from 'components/product-card';
import { createElement } from 'utils/create-element';

import './styles.css';

const PRODUCTS_DATA = Array.from({ length: 5 }).map(() => ({
  image: 'https://source.unsplash.com/random/130x130',
  name: 'Nome do produto',
  description: `
      Descrição do produto um pouco maior, com duas linhas ou
      três que explica melhor do que se trata.
    `,
  oldPrice: 'R$23,99',
  price: 'R$19,99',
  installments: {
    count: 2,
    value: 'R$9,99'
  }
}));

function SpecialSection() {
  const $productsList = createElement('div', { class: 'products-list' });
  const $buttonMore = Button({
    class: 'button-more',
    variant: 'secondary',
    children: 'Ainda mais produtos aqui!'
  });
  const $section = createElement('section', {
    class: 'home-section special-section',
    children: '<h2 class="title">Sua seleção especial</h2>'
  });

  $productsList.append(...PRODUCTS_DATA.map(ProductCard));
  $section.append($productsList, $buttonMore);

  return $section;
}

export { SpecialSection };
