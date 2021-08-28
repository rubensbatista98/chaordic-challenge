import { createElement } from 'utils/create-element';

import { ProductCard } from './product-card';

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
  const $buttonMore = createElement('button', {
    class: 'button-more',
    children: 'Ainda mais produtos aqui!'
  });

  PRODUCTS_DATA.map(ProductCard).forEach(($card) => {
    $productsList.appendChild($card);
  });

  const $section = createElement('section', {
    class: 'special-section',
    children: '<h2 class="title">Sua seleção especial</h2>'
  });

  $section.appendChild($productsList);
  $section.appendChild($buttonMore);

  return $section;
}

export { SpecialSection };
