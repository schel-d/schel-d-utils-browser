import { apply, element, ElementAttributes } from "./make";

/**
 * Identical to {@link ElementAttributes}, but with additional values for
 * `<input>`s.
 */
export type InputAttributes = ElementAttributes & {
  type?: string,
  value?: string,
  name?: string,
  autocomplete?: string
};

/**
 * Creates an `<input>`.
 * @param attributes Attributes to apply to the element, e.g. classes.
 */
export function input(attributes: InputAttributes) {
  const dom = element("input", attributes, {});
  apply(attributes?.type, x => dom.$element.type = x);
  apply(attributes?.value, x => dom.$element.value = x);
  apply(attributes?.name, x => dom.$element.name = x);
  apply(attributes?.autocomplete, x => dom.$element.autocomplete = x);
  return dom;
}

/**
 * Identical to {@link ElementAttributes}, but with additional values for
 * `<input>`s.
 */
export type RadioAttributes = Omit<InputAttributes, "type"> & {
  value?: string,
  name?: string,
  autocomplete?: string,
  checked?: boolean
};

/**
 * Creates an `<input type="radio">`.
 * @param attributes Attributes to apply to the element, e.g. classes.
 */
export function radio(attributes: RadioAttributes) {
  const dom = input({ type: "radio", ...attributes });
  apply(attributes?.checked, x => dom.$element.checked = x);
  return dom;
}
