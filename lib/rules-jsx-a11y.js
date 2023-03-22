// const OFF = 0;
const WARN = 1;
// const ERROR = 2;

module.exports = {
  // Enforce all elements that require alternative text have meaningful information to relay back to end user. https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/alt-text.md
  'jsx-a11y/alt-text': WARN,

  // Enforce all anchors to contain accessible content. https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-has-content.md
  'jsx-a11y/anchor-has-content': [WARN, { components: ['Link', 'NavLink'] }],

  // Enforce all anchors are valid, navigable elements. https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
  'jsx-a11y/anchor-is-valid': [WARN, { aspects: ['noHref', 'invalidHref'] }],

  // Enforce elements with aria-activedescendant are tabbable. https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-activedescendant-has-tabindex.md
  'jsx-a11y/aria-activedescendant-has-tabindex': WARN,

  // Enforce all aria-* props are valid. https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-props.md
  'jsx-a11y/aria-props': WARN,

  // Enforce ARIA state and property values are valid. https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-proptypes.md
  'jsx-a11y/aria-proptypes': WARN,

  // Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role. https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-role.md
  'jsx-a11y/aria-role': [WARN, { ignoreNonDOM: true }],

  // Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes. https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-unsupported-elements.md
  'jsx-a11y/aria-unsupported-elements': WARN,

  // Enforce iframe elements have a title attribute. https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/iframe-has-title.md
  'jsx-a11y/iframe-has-title': WARN,

  // Enforce <img> alt prop does not contain the word "image", "picture", or "photo". https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/img-redundant-alt.md
  'jsx-a11y/img-redundant-alt': WARN,

  // Enforce lang attribute has a valid value. https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/lang.md
  'jsx-a11y/lang': WARN,

  // Enforce that the accessKey prop is not used on any element to avoid complications with keyboard commands used by a screenreader. https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-access-key.md
  'jsx-a11y/no-access-key': WARN,

  // Enforce explicit role property is not the same as implicit/default role property on element. https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-distracting-elements.md
  'jsx-a11y/no-redundant-roles': WARN,

  // Enforce that elements with ARIA roles must have all required attributes for that role. https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/role-has-required-aria-props.md
  'jsx-a11y/role-has-required-aria-props': WARN,

  // Enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role. https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/role-supports-aria-props.md
  'jsx-a11y/role-supports-aria-props': WARN,
};
