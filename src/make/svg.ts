import { apply, applyArray, ElementAttributes } from "./make";

/**
 * Identical to {@link ElementAttributes}, but with additional values for
 * `<svg>`s.
 */
export type SVGAttributes = ElementAttributes & {
  width?: number;
  height?: number;
  viewBox?: string;
  preserveAspectRatio?: string;
  innerHTML?: string;
};

/**
 * Creates an `<svg>`.
 * @param attributes Attributes to apply to the element, e.g. classes.
 * @param children Children to append to the element and return.
 */
export function svg(attributes: SVGAttributes) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  apply(attributes?.id, x => element.id = x);
  applyArray(attributes?.classes, x => element.classList.add(...x));

  apply(attributes?.width, x => element.setAttribute("width", x.toFixed()));
  apply(attributes?.height, x => element.setAttribute("height", x.toFixed()));
  apply(attributes?.viewBox, x => element.setAttribute("viewBox", x));
  apply(attributes?.preserveAspectRatio,
    x => element.setAttribute("preserveAspectRatio", x)
  );

  apply(attributes?.innerHTML, x => element.innerHTML = x);

  return element;
}

/**
 * Contains the instructions for creating each icon in the set used by this
 * application.
 */
export type IconLibrary = { [index: string]: { viewBox: string, data: string } };

/**
 * Identical to {@link ElementAttributes}, but with additional values for
 * `<svg class="icon">`s.
 */
export type IconAttributes = ElementAttributes;

/**
 * Creates an `<svg class="icon">`.
 * @param attributes Attributes to apply to the element, e.g. classes.
 *
 */
export function icon<K extends IconLibrary, S extends keyof K>(icon: S,
  library: K, attributes: IconAttributes) {

  const iconData = library[icon];
  const dom = svg({
    viewBox: iconData.viewBox,
    innerHTML: iconData.data,
    ...attributes
  });
  dom.classList.add("icon");
  return dom;
}
