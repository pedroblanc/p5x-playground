module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
  ],
  rules: {
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
    'linebreak-style': 'off',  // we assume git handles this

    // allow devDependencies in files that match the pattern
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*.test.ts", "**/*.spec.ts"]}],

    // components will often end up converted to () => {} to accommodate logic
    'arrow-body-style': ['off'],
    // disabling this makes files cleaner. Babel will hoist declarations in build anyway
    'no-use-before-define': ['off'],
    
    // this rule complains about render()
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    
    // TODO: see if propTypes can be autogenerated from ts declarations
    'react/prop-types': 'off',

    // better handled by ts compiler
    'import/no-unresolved': ['off'],
    'import/extensions': ['off'],
    'react/destructuring-assignment': ['off', 'always'],
    
    'no-useless-constructor': ['off'],
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],


    // style
    'max-len': ['warn', 120],
    'no-multi-spaces': ['warn', { ignoreEOLComments: true }],
    'no-trailing-spaces': ['warn', { skipBlankLines: true, ignoreComments: true }],
    'quote-props': ['off'],
  },
};
