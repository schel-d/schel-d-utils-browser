/**
 * Get any element from the document. Throws an error if the ID is invalid.
 * @param id The ID of the element (without the "#" prefix).
 */
export function any(id: string): HTMLElement {
  const result = document.getElementById(id);
  if (result != null) { return result; }
  throw new Error(`Element with id "#${id}" not found.`);
}

/**
 * Get an element from the document and case it to a particular type. Throws an
 * error if the ID is invalid or the type is incorrect.
 * @param id The ID of the element (without the "#" prefix).
 * @param typeName The name of the type (for the error message).
 * @param typeChecker Function which checks the type of the element.
 */
function elementOfType<T extends HTMLElement>(id: string, typeName: string,
  typeChecker: (val: HTMLElement) => boolean): T {

  const result = any(id);
  if (typeChecker(result)) { return result as T; }
  throw new Error(`Element with id "#${id}" is not a "${typeName}".`);
}

/**
 * Get a {@link HTMLDivElement} from the document. Throws an error if the ID
 * is invalid or the type is incorrect.
 * @param id The ID of the element (without the "#" prefix).
 */
export function div(id: string): HTMLDivElement {
  return elementOfType<HTMLDivElement>(
    id, "HTMLDivElement", x => x instanceof HTMLDivElement
  );
}

/**
 * Get a {@link HTMLAnchorElement} from the document. Throws an error if the
 * ID is invalid or the type is incorrect.
 * @param id The ID of the element (without the "#" prefix).
 */
export function anchor(id: string): HTMLAnchorElement {
  return elementOfType<HTMLAnchorElement>(
    id, "HTMLAnchorElement", x => x instanceof HTMLAnchorElement
  );
}

/**
 * Get a {@link HTMLInputElement} from the document. Throws an error if the
 * ID is invalid or the type is incorrect.
 * @param id The ID of the element (without the "#" prefix).
 */
export function input(id: string): HTMLInputElement {
  return elementOfType<HTMLInputElement>(
    id, "HTMLInputElement", x => x instanceof HTMLInputElement
  );
}

/**
 * Get a {@link HTMLButtonElement} from the document. Throws an error if the
 * ID is invalid or the type is incorrect.
 * @param id The ID of the element (without the "#" prefix).
 */
export function button(id: string): HTMLButtonElement {
  return elementOfType<HTMLButtonElement>(
    id, "HTMLButtonElement", x => x instanceof HTMLButtonElement
  );
}

/**
 * Get a {@link HTMLSelectElement} from the document. Throws an error if the
 * ID is invalid or the type is incorrect.
 * @param id The ID of the element (without the "#" prefix).
 */
export function select(id: string): HTMLSelectElement {
  return elementOfType<HTMLSelectElement>(
    id, "HTMLSelectElement", x => x instanceof HTMLSelectElement
  );
}

/**
 * Get a {@link HTMLCanvasElement} from the document. Throws an error if the
 * ID is invalid or the type is incorrect.
 * @param id The ID of the element (without the "#" prefix).
 */
export function canvas(id: string): HTMLCanvasElement {
  return elementOfType<HTMLCanvasElement>(
    id, "HTMLCanvasElement", x => x instanceof HTMLCanvasElement
  );
}

/**
 * Get a {@link HTMLDialogElement} from the document. Throws an error if the
 * ID is invalid or the type is incorrect.
 * @param id The ID of the element (without the "#" prefix).
 */
export function dialog(id: string): HTMLDialogElement {
  return elementOfType<HTMLDialogElement>(
    id, "HTMLDialogElement", x => x instanceof HTMLDialogElement
  );
}
