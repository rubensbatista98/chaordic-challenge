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

function ProductCard({
  image,
  name,
  description,
  installments,
  oldPrice,
  price
}: ProductCardProps) {
  const $card = document.createElement('article');
  const $image = document.createElement('div');
  const $body = document.createElement('div');
  const $button = document.createElement('button');

  $card.className = 'product-card';
  $image.className = 'image';
  $body.className = 'body';
  $button.className = 'button';

  $button.textContent = 'Comprar';

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

  $body.appendChild($button);
  $card.appendChild($image);
  $card.appendChild($body);

  return $card;
}

export { ProductCard };
