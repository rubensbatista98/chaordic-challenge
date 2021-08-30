import { Button } from 'components/button';
import { createElement } from 'utils/create-element';

import './styles.css';

type ProductCardProps = {
  image: string;
  name: string;
  description: string;
  oldPrice: string;
  price: string;
  installments: {
    count: number;
    value: string;
  };
};

function ProductCard(props: ProductCardProps) {
  const { image, name, description, installments, oldPrice, price } = props;

  const $image = createElement('div', {
    class: 'image',
    children: `<img width="200" height="150" src=${image} aria-hidden="true" />`
  });

  const $card = createElement('article', {
    class: 'product-card',
    children: $image
  });

  const $body = createElement('div', {
    class: 'body',
    children: `
      <h3 class="name">${name}</h3>

      <p class="description">
        ${description}
      </p>

      <div class="price">
        <span class="old">De: ${oldPrice}</span>
        <span class="current">Por: ${price}</span>
        <span class="installments">ou ${installments.count}x de ${installments.value}</span>
      </div>
    `
  });

  const $button = Button({
    children: 'Comprar',
    full: true
  });

  $body.appendChild($button);
  $card.appendChild($body);

  return $card;
}

export { ProductCard };
