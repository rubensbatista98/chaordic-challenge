import { formatPrice } from 'utils/helpers';
import type { Product } from 'types/product';

import { fetcher } from './fetcher';

type ApiProduct = {
  id: string;
  image: string;
  name: string;
  description: string;
  oldPrice: number;
  price: number;
  installments: {
    count: number;
    value: number;
  };
};

type ResponseType = {
  products: ApiProduct[];
  nextPage?: string;
};

async function getProducts(url?: string) {
  try {
    const data = await fetcher<ResponseType>(url);

    const products = data.products.map<Product>((product) => ({
      id: product.id as string,
      name: product.name as string,
      image: product.image as string,
      oldPrice: formatPrice(product.oldPrice as number),
      price: formatPrice(product.price as number),
      description: product.description as string,
      installments: {
        count: product.installments.count as number,
        value: formatPrice(product.installments.count as number)
      }
    }));

    async function nextPage() {
      return getProducts(`https://${data.nextPage}`);
    }

    return { products, nextPage: data.nextPage ? nextPage : null };
  } catch (error) {
    return Promise.reject({
      message: 'Houve um erro inesperado. Tente novamente mais tarde!'
    });
  }
}

export { getProducts };
