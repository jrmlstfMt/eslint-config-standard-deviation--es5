module.exports = {
  'extends': ['standard'],
  'parserOptions': {
    'ecmaVersion': 5,
    'sourceType': 'script',
    'ecmaFeatures': {
      'experimentalObjectRestSpread': false,
      'jsx': false
    }
  },
  'env': {
    'es6': false
  },
  'plugins': [
    'standard'
  ],
  'rules': {
    'semi': ['off', 'never'],
    'space-before-function-paren': ['off', 'never']
  }
};
