import { apply, element, ElementAttributes, ElementCollection } from "./make";

/**
 * Identical to {@link ElementAttributes}, but with additional values for
 * `<form>`s.
 */
export type FormAttributes = ElementAttributes & {
  action: string;
  method: string;
  autocomplete?: string;
};

/**
 * Creates an `<form>`.
 * @param attributes Attributes to apply to the element, e.g. classes.
 */
export function form<K extends ElementCollection>(attributes: FormAttributes,
  children: K) {

  const dom = element("form", attributes, children);
  apply(attributes?.action, x => dom.$element.action = x);
  apply(attributes?.method, x => dom.$element.method = x);
  apply(attributes?.autocomplete, x => dom.$element.autocomplete = x);
  return dom;
}

/**
 * Identical to {@link ElementAttributes}, but with additional values for
 * `<input>`s.
 */
export type InputAttributes = ElementAttributes & {
  type?: string;
  value?: string;
  name?: string;
  autocomplete?: string;
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
 * `<input type="radio">`s.
 */
export type RadioAttributes = Omit<InputAttributes, "type"> & {
  checked?: boolean;
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

/**
 * Identical to {@link ElementAttributes}, but with additional values for
 * `<input type="checkbox">`s.
 */
export type CheckboxAttributes = Omit<InputAttributes, "type"> & {
  checked?: boolean;
};

/**
 * Creates an `<input type="checkbox">`.
 * @param attributes Attributes to apply to the element, e.g. classes.
 */
export function checkbox(attributes: CheckboxAttributes) {
  const dom = input({ type: "checkbox", ...attributes });
  apply(attributes?.checked, x => dom.$element.checked = x);
  return dom;
}

/**
 * Identical to {@link ElementAttributes}, but with additional values for
 * `<select>`s.
 */
export type SelectAttributes = ElementAttributes & {
  name?: string;
  autocomplete?: string;
};

/**
 * Creates a `<select>`.
 * @param attributes Attributes to apply to the element, e.g. text.
 */
export function select<K extends ElementCollection>(
  attributes: SelectAttributes, children: K) {

  const dom = element("select", {}, children);
  apply(attributes?.name, x => dom.$element.name = x);
  apply(attributes?.autocomplete, x => dom.$element.autocomplete = x);
  return dom;
}

/**
 * Identical to {@link ElementAttributes}, but with additional values for
 * `<option>`s.
 */
export type OptionAttributes = ElementAttributes & {
  text?: string;
  value?: string;
  selected?: boolean;
};

/**
 * Creates an `<option>`.
 * @param attributes Attributes to apply to the element, e.g. text.
 */
export function option(attributes: OptionAttributes) {
  const dom = element("option", {}, {});
  apply(attributes?.text, x => dom.$element.text = x);
  apply(attributes?.value, x => dom.$element.value = x);
  apply(attributes?.selected, x => dom.$element.selected = x);
  return dom;
}

/**
 * Identical to {@link ElementAttributes}, but with additional values for
 * `<label>`s.
 */
export type LabelAttributes = ElementAttributes & {
  text?: string;
  for?: string;
};

/**
 * Creates a `<label>`.
 * @param attributes Attributes to apply to the element, e.g. text.
 */
export function label<K extends ElementCollection>(attributes: LabelAttributes,
  children: K) {

  const dom = element("label", {}, children);
  apply(attributes?.text, x => dom.$element.textContent = x);
  apply(attributes?.for, x => dom.$element.htmlFor = x);
  return dom;
}
