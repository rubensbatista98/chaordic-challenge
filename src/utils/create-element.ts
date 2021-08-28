type ElementTag = keyof HTMLElementTagNameMap;

type Props = Record<string, string>;

function createElement<Tag extends ElementTag>(
  element: Tag,
  props: Props = {}
): HTMLElementTagNameMap[Tag] {
  const $element = document.createElement(element);
  const propsKeys = Object.entries(props);

  propsKeys.forEach(([key, value]) => $element.setAttribute(key, value));

  return $element;
}

export { createElement };
