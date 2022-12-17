/** An array which may have undefined element. For use with {@link maybe}. */
export type DynamicCollection<T> = (T | undefined)[];

/** An element and it's children, forming a tree. */
export type ElementTree<T extends Element, K> = K & { $element: T; };

/** A object containing named element trees for an element's children. */
export type ElementCollection =
  Record<string, ElementTree<Element, unknown> | undefined> | undefined;

/**
 * Returns {@link ifTrue} if {@link condition} is true, and {@link ifFalse}
 * (usually undefined) otherwise.
 * @param condition The condition.
 * @param ifTrue Value used if the condition is true.
 * @param ifFalse Value used if the condition is false.
 */
export function maybe<T>(condition: boolean, ifTrue: T, ifFalse?: T): T | undefined {
  return condition ? ifTrue : ifFalse;
}

/**
 * Returns the non-null elements from the array, or an empty array if the array
 * is undefined.
 * @param array The array.
 */
export function retrieve<T>(array: DynamicCollection<T> | undefined): T[] {
  if (array == null) { return []; }
  return array.filter(x => x != null) as T[];
}

/** The possible configuration for a HtmlElement. */
export type ElementAttributes = {
  id?: string;
  classes?: DynamicCollection<string>;
  textContent?: string;
}

/**
 * Constructs a html element with the given tag and configures it with the given
 * attributes. Appends each child to element if provided, and passes them
 * through into the returned object.
 * @param tag The html tag, e.g. "p" for paragraph.
 * @param attributes The attributes to configure the element with.
 * @param children The children to append and return.
 */
export function element<
  Tag extends keyof HTMLElementTagNameMap, Children extends ElementCollection
>(
  tag: Tag,
  attributes?: ElementAttributes,
  children?: Children
): ElementTree<HTMLElementTagNameMap[Tag], Children> {

  const element = document.createElement(tag);

  // Set the element ID if provided.
  if (attributes?.id != null) {
    element.id = attributes.id;
  }

  // Add each class provided.
  const classes = retrieve(attributes?.classes);
  if (classes.length > 1) {
    element.classList.add(...classes);
  }

  // Set the text content if provided.
  if (attributes?.textContent != null) {
    element.textContent = attributes.textContent;
  }

  // Add each child element provided.
  if (children != null) {
    element.replaceChildren(
      ...Object.keys(children)
        .filter(k => children[k] != null)
        .map(k => (children[k] as ElementTree<Element, unknown>).$element)
    );
  }

  // Return this element, as well as any children.
  return {
    $element: element,
    ...children
  } as ElementTree<HTMLElementTagNameMap[Tag], Children>;
}
