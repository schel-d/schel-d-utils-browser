import { element, ElementAttributes, ElementCollection } from "./make";

/**
 * Creates a `<p>`.
 * @param attributes Attributes to apply to the element, e.g. classes.
 * @param children Children to append to the element and return.
 */
export function p<K extends ElementCollection = undefined>(
  attributes?: ElementAttributes, children?: K) {
  return element("p", attributes, children);
}

/**
 * Creates a `<p>` with the given text content.
 * @param text The text content.
 * @param attributes Attributes to apply to the element, e.g. classes.
 */
export function pText(text: string,
  attributes?: Omit<ElementAttributes, "textContent">) {
  return p({ textContent: text, ...attributes });
}

/**
 * Creates a `<span>`.
 * @param attributes Attributes to apply to the element, e.g. classes.
 * @param children Children to append to the element and return.
 */
export function span<K extends ElementCollection = undefined>(
  attributes?: ElementAttributes, children?: K) {
  return element("span", attributes, children);
}

/**
 * Creates a `<span>` with the given text content.
 * @param text The text content.
 * @param attributes Attributes to apply to the element, e.g. classes.
 */
export function spanText(text: string,
  attributes?: Omit<ElementAttributes, "textContent">) {
  return span({ textContent: text, ...attributes });
}

/**
 * Creates a `<h1>`.
 * @param attributes Attributes to apply to the element, e.g. classes.
 * @param children Children to append to the element and return.
 */
export function h1<K extends ElementCollection = undefined>(
  attributes?: ElementAttributes, children?: K) {
  return element("h1", attributes, children);
}

/**
 * Creates a `<h1>` with the given text content.
 * @param text The text content.
 * @param attributes Attributes to apply to the element, e.g. classes.
 */
export function h1Text(text: string,
  attributes?: Omit<ElementAttributes, "textContent">) {
  return h1({ textContent: text, ...attributes });
}

/**
 * Creates a `<h2>`.
 * @param attributes Attributes to apply to the element, e.g. classes.
 * @param children Children to append to the element and return.
 */
export function h2<K extends ElementCollection = undefined>(
  attributes?: ElementAttributes, children?: K) {
  return element("h2", attributes, children);
}

/**
 * Creates a `<h2>` with the given text content.
 * @param text The text content.
 * @param attributes Attributes to apply to the element, e.g. classes.
 */
export function h2Text(text: string,
  attributes?: Omit<ElementAttributes, "textContent">) {
  return h2({ textContent: text, ...attributes });
}

/**
 * Creates a `<h3>`.
 * @param attributes Attributes to apply to the element, e.g. classes.
 * @param children Children to append to the element and return.
 */
export function h3<K extends ElementCollection = undefined>(
  attributes?: ElementAttributes, children?: K) {
  return element("h3", attributes, children);
}

/**
 * Creates a `<h3>` with the given text content.
 * @param text The text content.
 * @param attributes Attributes to apply to the element, e.g. classes.
 */
export function h3Text(text: string,
  attributes?: Omit<ElementAttributes, "textContent">) {
  return h3({ textContent: text, ...attributes });
}

/**
 * Creates a `<h4>`.
 * @param attributes Attributes to apply to the element, e.g. classes.
 * @param children Children to append to the element and return.
 */
export function h4<K extends ElementCollection = undefined>(
  attributes?: ElementAttributes, children?: K) {
  return element("h4", attributes, children);
}

/**
 * Creates a `<h4>` with the given text content.
 * @param text The text content.
 * @param attributes Attributes to apply to the element, e.g. classes.
 */
export function h4Text(text: string,
  attributes?: Omit<ElementAttributes, "textContent">) {
  return h4({ textContent: text, ...attributes });
}

/**
 * Creates a `<h5>`.
 * @param attributes Attributes to apply to the element, e.g. classes.
 * @param children Children to append to the element and return.
 */
export function h5<K extends ElementCollection = undefined>(
  attributes?: ElementAttributes, children?: K) {
  return element("h5", attributes, children);
}

/**
 * Creates a `<h5>` with the given text content.
 * @param text The text content.
 * @param attributes Attributes to apply to the element, e.g. classes.
 */
export function h5Text(text: string,
  attributes?: Omit<ElementAttributes, "textContent">) {
  return h5({ textContent: text, ...attributes });
}

/**
 * Creates a `<h6>`.
 * @param attributes Attributes to apply to the element, e.g. classes.
 * @param children Children to append to the element and return.
 */
export function h6<K extends ElementCollection = undefined>(
  attributes?: ElementAttributes, children?: K) {
  return element("h6", attributes, children);
}

/**
 * Creates a `<h6>` with the given text content.
 * @param text The text content.
 * @param attributes Attributes to apply to the element, e.g. classes.
 */
export function h6Text(text: string,
  attributes?: Omit<ElementAttributes, "textContent">) {
  return h6({ textContent: text, ...attributes });
}
