type ElementTag = keyof HTMLElementTagNameMap;

type Props = Record<string, any> & {
  children?: string | DocumentFragment | HTMLElement;
};

function createElement<Tag extends ElementTag>(
  element: Tag,
  props: Props = {}
): HTMLElementTagNameMap[Tag] {
  const { children, ...rest } = props;

  const $element = document.createElement(element);
  const propsKeys = Object.entries(rest);

  propsKeys.forEach(([key, value]) => $element.setAttribute(key, value));

  if (!children) {
    return $element;
  }

  if (isElementOrFragment(children)) {
    $element.appendChild(children);
  } else {
    $element.insertAdjacentHTML('afterbegin', children);
  }

  return $element;
}

const isElementOrFragment = (
  children: Props['children']
): children is HTMLElement | DocumentFragment => typeof children !== 'string';

export { createElement };
