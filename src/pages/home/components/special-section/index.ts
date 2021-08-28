import './styles.css';

import { createElement } from 'utils/create-element';

import { ProductCard } from './product-card';

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
  const $section = createElement('section', { class: 'special-section' });
  const $productsList = createElement('div', { class: 'products-list' });
  const $buttonMore = createElement('button', { class: 'button-more' });

  $buttonMore.textContent = 'Ainda mais produtos aqui!';
  $section.appendChild($productsList);
  $section.appendChild($buttonMore);

  PRODUCTS_DATA.map(ProductCard).forEach(($card) => {
    $productsList.appendChild($card);
  });

  $section.insertAdjacentHTML(
    'afterbegin',
    `
      <h2 class="title">Sua seleção especial</h2>
    `
  );

  return $section;
}

export { SpecialSection };
