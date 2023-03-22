// const OFF = 0;
const WARN = 1;
const ERROR = 2;

const restrictedGlobals = [
  'addEventListener',
  'blur',
  'close',
  'closed',
  'confirm',
  'defaultStatus',
  'defaultstatus',
  'event',
  'external',
  'find',
  'focus',
  'frameElement',
  'frames',
  'history',
  'innerHeight',
  'innerWidth',
  'length',
  'location',
  'locationbar',
  'menubar',
  'moveBy',
  'moveTo',
  'name',
  'onblur',
  'onerror',
  'onfocus',
  'onload',
  'onresize',
  'onunload',
  'open',
  'opener',
  'opera',
  'outerHeight',
  'outerWidth',
  'pageXOffset',
  'pageYOffset',
  'parent',
  'print',
  'removeEventListener',
  'resizeBy',
  'resizeTo',
  'screen',
  'screenLeft',
  'screenTop',
  'screenX',
  'screenY',
  'scroll',
  'scrollbars',
  'scrollBy',
  'scrollTo',
  'scrollX',
  'scrollY',
  'self',
  'status',
  'statusbar',
  'stop',
  'toolbar',
  'top',
];

module.exports = {
  // Enforce return statements in callbacks of array methods https://eslint.org/docs/latest/rules/array-callback-return
  'array-callback-return': WARN,

  // Require super() calls in constructors https://eslint.org/docs/latest/rules/constructor-super
  'constructor-super': ERROR,

  // Enforce return statements in getters https://eslint.org/docs/latest/rules/getter-return
  'getter-return': WARN,

  // Enforce or disallow parentheses when invoking a constructor with no arguments https://eslint.org/docs/latest/rules/new-parens
  'new-parens': WARN,

  // Disallow Array constructors https://eslint.org/docs/latest/rules/no-array-constructor
  'no-array-constructor': WARN,

  // Disallow the use of arguments.caller or arguments.callee https://eslint.org/docs/latest/rules/no-caller
  'no-caller': ERROR,

  // Disallow assignment operators in conditional expressions https://eslint.org/docs/latest/rules/no-cond-assign
  'no-cond-assign': [WARN, 'except-parens'],

  // Disallow reassigning const variables https://eslint.org/docs/latest/rules/no-const-assign
  'no-const-assign': ERROR,

  // Disallow control characters in regular expressions https://eslint.org/docs/latest/rules/no-control-regex
  'no-control-regex': WARN,

  // Disallow duplicate arguments in function definitions https://eslint.org/docs/latest/rules/no-dupe-args
  'no-dupe-args': WARN,

  // Disallow duplicate class members https://eslint.org/docs/latest/rules/no-dupe-class-members
  'no-dupe-class-members': WARN,

  // Disallow duplicate keys in object literals https://eslint.org/docs/latest/rules/no-dupe-keys
  'no-dupe-keys': WARN,

  // Disallow duplicate case labels https://eslint.org/docs/latest/rules/no-duplicate-case
  'no-duplicate-case': WARN,

  // Disallow duplicate module imports https://eslint.org/docs/latest/rules/no-duplicate-imports
  'no-duplicate-imports': WARN,

  // Disallow empty character classes in regular expressions https://eslint.org/docs/latest/rules/no-empty-character-class
  'no-empty-character-class': WARN,

  // Disallow empty destructuring patterns https://eslint.org/docs/latest/rules/no-empty-pattern
  'no-empty-pattern': WARN,

  // Disallow empty block statements https://eslint.org/docs/latest/rules/no-empty
  'no-empty': [WARN, { allowEmptyCatch: true }],

  // Disallow the use of eval() https://eslint.org/docs/latest/rules/no-eval
  'no-eval': ERROR,

  // Disallow reassigning exceptions in catch clauses https://eslint.org/docs/latest/rules/no-ex-assign
  'no-ex-assign': WARN,

  // Disallow extending native types https://eslint.org/docs/latest/rules/no-extend-native
  'no-extend-native': WARN,

  // Disallow unnecessary calls to .bind() https://eslint.org/docs/latest/rules/no-extra-bind
  'no-extra-bind': WARN,

  // Disallow unnecessary boolean casts https://eslint.org/docs/latest/rules/no-extra-boolean-cast
  'no-extra-boolean-cast': WARN,

  // Disallow unnecessary labels https://eslint.org/docs/latest/rules/no-extra-label
  'no-extra-label': WARN,

  // Disallow fallthrough of case statements https://eslint.org/docs/latest/rules/no-fallthrough
  'no-fallthrough': WARN,

  // Disallow reassigning function declarations https://eslint.org/docs/latest/rules/no-func-assign
  'no-func-assign': WARN,

  // Disallow assignments to native objects or read-only global variables https://eslint.org/docs/latest/rules/no-global-assign
  'no-global-assign': WARN,

  // Disallow the use of eval()-like methods https://eslint.org/docs/latest/rules/no-implied-eval
  'no-implied-eval': WARN,

  // Disallow invalid regular expression strings in RegExp constructors https://eslint.org/docs/latest/rules/no-invalid-regexp
  'no-invalid-regexp': WARN,

  // Disallow labels that share a name with a variable https://eslint.org/docs/latest/rules/no-label-var
  'no-label-var': WARN,

  // Disallow labeled statements https://eslint.org/docs/latest/rules/no-labels
  'no-labels': [WARN, { allowLoop: true, allowSwitch: false }],

  // Disallow unnecessary nested blocks https://eslint.org/docs/latest/rules/no-lone-blocks
  'no-lone-blocks': WARN,

  // Disallow function declarations that contain unsafe references inside loop statements https://eslint.org/docs/latest/rules/no-loop-func
  'no-loop-func': WARN,

  // Disallow mixed binary operators https://eslint.org/docs/latest/rules/no-mixed-operators
  'no-mixed-operators': [
    WARN,
    {
      groups: [
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
      allowSamePrecedence: false,
    },
  ],

  // Disallow assignments to native objects or read-only global variables https://eslint.org/docs/latest/rules/no-native-reassign
  'no-native-reassign': WARN,

  // Disallow new operators with the Function object https://eslint.org/docs/latest/rules/no-new-func
  'no-new-func': WARN,

  // Disallow Object constructors https://eslint.org/docs/latest/rules/no-new-object
  'no-new-object': WARN,

  // Disallow new operators with the Symbol object https://eslint.org/docs/latest/rules/no-new-symbol
  'no-new-symbol': WARN,

  // Disallow new operators with the String, Number, and Boolean objects https://eslint.org/docs/latest/rules/no-new-wrappers
  'no-new-wrappers': WARN,

  // Disallow octal literals https://eslint.org/docs/latest/rules/no-octal
  'no-octal': WARN,

  // Disallow octal escape sequences in string literals https://eslint.org/docs/latest/rules/no-octal-escape
  'no-octal-escape': ERROR,

  // Disallow variable redeclaration https://eslint.org/docs/latest/rules/no-redeclare
  'no-redeclare': ERROR,

  // Disallow specified global variables https://eslint.org/docs/latest/rules/no-restricted-globals
  'no-restricted-globals': [ERROR].concat(restrictedGlobals),

  // Disallow certain properties on certain objects https://eslint.org/docs/latest/rules/no-restricted-properties
  'no-restricted-properties': [
    ERROR,
    // {}
  ],

  // Disallow specified syntax https://eslint.org/docs/latest/rules/no-restricted-syntax
  'no-restricted-syntax': [ERROR, 'WithStatement'],

  // Disallow javascript: urls https://eslint.org/docs/latest/rules/no-script-url
  'no-script-url': WARN,

  // Disallow assignments where both sides are exactly the same https://eslint.org/docs/latest/rules/no-self-assign
  'no-self-assign': WARN,

  // Disallow comparisons where both sides are exactly the same https://eslint.org/docs/latest/rules/no-self-compare
  'no-self-compare': WARN,

  // Disallow comma operators https://eslint.org/docs/latest/rules/no-sequences
  'no-sequences': WARN,

  // Disallow identifiers from shadowing restricted names https://eslint.org/docs/latest/rules/no-shadow-restricted-names
  'no-shadow-restricted-names': WARN,

  // Disallow sparse arrays https://eslint.org/docs/latest/rules/no-sparse-arrays
  'no-sparse-arrays': WARN,

  // Disallow template literal placeholder syntax in regular strings https://eslint.org/docs/latest/rules/no-template-curly-in-string
  'no-template-curly-in-string': WARN,

  // Disallow this/super before calling super() in constructors https://eslint.org/docs/latest/rules/no-this-before-super
  'no-this-before-super': WARN,

  // Disallow the use of undeclared variables unless mentioned in /*global */ comments https://eslint.org/docs/latest/rules/no-undef
  'no-undef': ERROR,

  // Disallow unreachable code after return, throw, continue, and break statements https://eslint.org/docs/latest/rules/no-unreachable
  'no-unreachable': WARN,

  // Disallow negating the left operand of relational operators https://eslint.org/docs/latest/rules/no-unsafe-negation
  'no-unsafe-negation': ERROR,

  // Disallow unused expressions https://eslint.org/docs/latest/rules/no-unused-expressions
  'no-unused-expressions': [
    WARN,
    {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
    },
  ],

  // Disallow unused labels https://eslint.org/docs/latest/rules/no-unused-labels
  'no-unused-labels': WARN,

  // Disallow unused variables https://eslint.org/docs/latest/rules/no-unused-vars
  'no-unused-vars': [
    WARN,
    {
      args: 'none',
      ignoreRestSiblings: true,
      varsIgnorePattern: '^(event|_)$',
    },
  ],

  // Disallow the use of variables before they are defined https://eslint.org/docs/latest/rules/no-use-before-define
  'no-use-before-define': [
    WARN,
    {
      functions: false,
      classes: false,
      variables: false,
    },
  ],

  // Disallow unnecessary computed property keys in objects and classes https://eslint.org/docs/latest/rules/no-useless-computed-key
  'no-useless-computed-key': WARN,

  // Disallow unnecessary concatenation of literals or template literals https://eslint.org/docs/latest/rules/no-useless-concat
  'no-useless-concat': WARN,

  // Disallow unnecessary constructors https://eslint.org/docs/latest/rules/no-useless-constructor
  'no-useless-constructor': WARN,

  // Disallow unnecessary escape characters https://eslint.org/docs/latest/rules/no-useless-escape
  'no-useless-escape': WARN,

  // Disallow renaming import, export, and destructured assignments to the same name https://eslint.org/docs/latest/rules/no-useless-rename
  'no-useless-rename': [
    WARN,
    {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    },
  ],

  // Require let or const instead of var https://eslint.org/docs/latest/rules/no-var
  'no-var': WARN,

  // Disallow with statements https://eslint.org/docs/latest/rules/no-with
  'no-with': WARN,

  // Require generator functions to contain yield https://eslint.org/docs/latest/rules/require-yield
  'require-yield': WARN,

  // Require calls to isNaN() when checking for NaN https://eslint.org/docs/latest/rules/use-isnan
  'use-isnan': WARN,

  // Enforce comparing typeof expressions against valid strings https://eslint.org/docs/latest/rules/valid-typeof
  'valid-typeof': WARN,
};
