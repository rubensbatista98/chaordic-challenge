import { createElement } from 'utils/create-element';
import type { Props } from 'utils/create-element';

import './styles.css';

type AsLink =
  | {
      asLink: true;
      href: string;
    }
  | {
      asLink?: false;
      href?: never;
    };

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  full?: boolean;
  children: NonNullable<Props['children']>;
} & AsLink &
  Props;

function Button<
  ButtonType extends HTMLButtonElement | HTMLAnchorElement = HTMLButtonElement
>(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    full = false,
    asLink = false,
    class: className = '',
    ...rest
  } = props;

  const tagName = asLink ? 'a' : 'button';

  return createElement(tagName, {
    class: `button -${variant} ${full && '-full'} ${className}`,
    children,
    ...rest
  }) as ButtonType;
}

export { Button };
