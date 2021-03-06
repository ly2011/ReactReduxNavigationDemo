const eslintrc = {
  extends: ['eslint-config-airbnb'],
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: ['markdown', 'react', 'babel'],
  rules: {
    'no-console': 0,
    'func-names': 0,
    'global-require': 0,
    'arrow-body-style': 0,
    'prefer-const': 0,
    'no-plusplus': 0,
    'one-var': 0,
    'no-mixed-operators': 0,
    'import/prefer-default-export': 0,
    'react/no-unescaped-entities': 0,
    'react/sort-comp': 0,
    'react/prop-types': 0,
    'react/self-closing-comp': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/prefer-es6-class': 1,
    'react/prefer-stateless-function': 0,
    'react/no-unused-state': 0,
    'no-use-before-define': 0,
    'class-methods-use-this': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    'react/no-array-index-key': 0,
    'react/no-multi-comp': 0,
    'no-underscore-dangle': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.md'] }],
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'prefer-destructuring': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
    'max-len': 0,
    'consistent-return': 0,
    'no-redeclare': 0,
    'react/require-extension': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/no-danger': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'function-paren-newline': 0,
    'object-curly-newline': 0,
    'no-restricted-globals': 0
  }
};

if (process.env.RUN_ENV === 'DEMO') {
  eslintrc.globals = {
    React: true,
    ReactDOM: true,
    mountNode: true
  };

  Object.assign(eslintrc.rules, {
    indent: 0,
    'no-console': 0,
    'no-plusplus': 0,
    'eol-last': 0,
    'prefer-rest-params': 0,
    'react/no-multi-comp': 0,
    'jsx-a11y/href-no-hash': 0,
    'import/newline-after-import': 0
  });
}

module.exports = eslintrc;
