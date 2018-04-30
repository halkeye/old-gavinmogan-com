module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'standard'
  ],
  plugins: ['standard', 'promise', 'import', 'jest', 'react'],
  rules: {
    semi: [2, 'always'],
    'no-var': 'error'
  },
  env: {
    es6: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
};
