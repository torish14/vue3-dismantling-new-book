module.exports = {
  env: {
    node: true,
  },
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console':
      process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger':
      process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-unused-components': 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
    {
      plugins: ['cypress'],
      files: ['**/tests/unit/**/*.{j,t}s?(x)'],
      env: {
        mocha: true,
        'cypress/globals': true,
      },
      rules: {
        strict: 'off',
      },
    },
  ],
}
