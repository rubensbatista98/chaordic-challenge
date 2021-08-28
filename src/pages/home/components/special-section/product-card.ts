import { createElement } from 'utils/create-element';

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

  const $card = createElement('article', { class: 'product-card' });
  const $image = createElement('div', { class: 'image' });
  const $body = createElement('div', { class: 'body' });
  const $button = createElement('button', { class: 'button' });

  $button.textContent = 'Comprar';

  $body.appendChild($button);
  $card.appendChild($image);
  $card.appendChild($body);

  $image.insertAdjacentHTML(
    'afterbegin',
    `
    <img width="200" height="150" src=${image} aria-hidden="true" />
  `
  );

  $body.insertAdjacentHTML(
    'afterbegin',
    `
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
  );

  return $card;
}

export { ProductCard };
