import { apply, element, ElementAttributes, ElementCollection } from "./make";

/**
 * Identical to {@link ElementAttributes}, but with additional values for
 * `<a>`s.
 */
export type AnchorAttributes = ElementAttributes & {
  text?: string,
  href?: string
};

/**
 * Creates an `<a>`.
 * @param attributes Attributes to apply to the element, e.g. classes.
 * @param children Children to append to the element and return.
 */
export function a<K extends ElementCollection>(
  attributes: AnchorAttributes, children: K) {

  const dom = element("a", attributes, children);
  apply(attributes?.text, x => dom.$element.textContent = x);
  apply(attributes?.href, x => dom.$element.href = x);
  return dom;
}

/**
 * Identical to {@link ElementAttributes}, but with additional values for
 * `<button>`s.
 */
export type ButtonAttributes = ElementAttributes & {
  text?: string,
  title?: string
};

/**
 * Creates an `<button>`.
 * @param attributes Attributes to apply to the element, e.g. classes.
 * @param children Children to append to the element and return.
 */
export function button<K extends ElementCollection>(
  attributes: ButtonAttributes, children: K) {

  const dom = element("button", attributes, children);
  apply(attributes?.text, x => dom.$element.textContent = x);
  apply(attributes?.title, x => dom.$element.title = x);
  return dom;
}

/**
 * Identical to {@link ElementAttributes}, but with additional values for
 * `<input>`s.
 */
export type ImageAttributes = ElementAttributes & {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
};

/**
 * Creates an `<input>`.
 * @param attributes Attributes to apply to the element, e.g. classes.
 */
export function img(attributes: ImageAttributes) {
  const dom = element("img", attributes, {});
  apply(attributes?.src, x => dom.$element.src = x);
  apply(attributes?.alt, x => dom.$element.alt = x);
  apply(attributes?.width, x => dom.$element.width = x);
  apply(attributes?.height, x => dom.$element.height = x);
  return dom;
}
