const axios = require('axios');
const fs = require('fs');
const { parse } = require('node-html-parser');

const fileName = 'rules-core-a.js';
const initialTop = `
const OFF = 0;
const 'WARN' = 1;
const 'ERROR' = 2;
`;
const data = {
  'array-callback-return': 'WARN',
  'constructor-super': 'ERROR',
  'getter-return': 'WARN',
  'new-parens': 'WARN',
  'no-array-constructor': 'WARN',
  'no-caller': 'ERROR',
  'no-cond-assign': `[WARN, 'except-parens']`,
  'no-const-assign': 'ERROR',
  'no-control-regex': 'WARN',
  'no-dupe-args': 'WARN',
  'no-dupe-class-members': 'WARN',
  'no-dupe-keys': 'WARN',
  'no-duplicate-case': 'WARN',
  'no-duplicate-imports': 'WARN',
  'no-empty-character-class': 'WARN',
  'no-empty-pattern': 'WARN',
  'no-empty': '[WARN, { allowEmptyCatch: true }]',
  'no-eval': 'ERROR',
  'no-ex-assign': 'WARN',
  'no-extend-native': 'WARN',
  'no-extra-bind': 'WARN',
  'no-extra-boolean-cast': 'WARN',
  'no-extra-label': 'WARN',
  'no-fallthrough': 'WARN',
  'no-func-assign': 'WARN',
  'no-global-assign': 'WARN',
  'no-implied-eval': 'WARN',
  'no-invalid-regexp': 'WARN',
  'no-label-var': 'WARN',
  'no-labels': '[WARN, { allowLoop: true, allowSwitch: false }]',
  'no-lone-blocks': 'WARN',
  'no-loop-func': 'WARN',
  'no-mixed-operators': `[
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
  ]`,
  'no-native-reassign': 'WARN',
  'no-new-func': 'WARN',
  'no-new-object': 'WARN',
  'no-new-symbol': 'WARN',
  'no-new-wrappers': 'WARN',
  'no-octal': 'WARN',
  'no-octal-escape': 'ERROR',
  'no-redeclare': 'ERROR',
  'no-restricted-globals': '[ERROR].concat(restrictedGlobals)',
  'no-restricted-properties': `[
    ERROR,
    // {}
  ]`,
  'no-restricted-syntax': ['ERROR', 'WithStatement'],
  'no-script-url': 'WARN',
  'no-self-assign': 'WARN',
  'no-self-compare': 'WARN',
  'no-sequences': 'WARN',
  'no-shadow-restricted-names': 'WARN',
  'no-sparse-arrays': 'WARN',
  'no-template-curly-in-string': 'WARN',
  'no-this-before-super': 'WARN',
  'no-undef': 'ERROR',
  'no-unreachable': 'WARN',
  'no-unsafe-negation': 'ERROR',
  'no-unused-expressions': `[
    WARN,
    {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
    },
  ]`,
  'no-unused-labels': 'WARN',
  'no-unused-vars': `[
    WARN,
    {
      args: 'none',
      ignoreRestSiblings: true,
      varsIgnorePattern: '^(event|_)$',
    },
  ]`,
  'no-use-before-define': `[
    WARN,
    {
      functions: false,
      classes: false,
      variables: false,
    },
  ]`,
  'no-useless-computed-key': 'WARN',
  'no-useless-concat': 'WARN',
  'no-useless-constructor': 'WARN',
  'no-useless-escape': 'WARN',
  'no-useless-rename': `[
    WARN,
    {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    },
  ]`,
  'no-var': 'WARN',
  'no-with': 'WARN',
  'require-yield': 'WARN',
  'use-isnan': 'WARN',
  'valid-typeof': 'WARN',
};

const rules = Object.entries(data);

const getStringList = async function () {
  const fullList = await Promise.all(
    rules.map(async ([key, value]) => {
      console.log('rule', key);
      const link = `https://eslint.org/docs/latest/rules/${key}`;
      console.log(`link for rule ${key}: ${link}`);

      const resp = await axios.get(link);
      const doc = parse(resp.data);

      const h1 = doc.querySelector('h1');
      const emptyP = h1.nextElementSibling;
      const info = emptyP.nextElementSibling.textContent;
      console.log(`info for rule ${key}: ${info}`);

      const string = `
          // ${info} ${link}
          '${key}': ${value}
          `;
      console.log(`result for rule ${key}: ${string}`);
      return string;
    })
  );

  return fullList;
};

(async () => {
  const result = await getStringList();

  const s = `
${initialTop}

module.exports = {
  ${result.join(',\n')}
}
  `;

  fs.writeFileSync(fileName, s, 'utf8');
})();
