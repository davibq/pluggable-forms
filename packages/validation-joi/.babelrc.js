const path = require('path');

const config = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          browsers: ['>1%', 'not ie 11', 'not op_mini all'],
        },
      },
    ],
  ],

  plugins: [
    '@babel/plugin-proposal-object-rest-spread',

    '@babel/plugin-syntax-dynamic-import',

    [
      'babel-plugin-module-resolver',
      {
        root: [path.resolve(__dirname, 'src')],
      },
    ],

    'babel-plugin-lodash',
  ],

  env: {
    production: {
      plugins: [
        [
          'babel-plugin-transform-react-remove-prop-types',
          {
            removeImport: true,
          },
        ],

        '@babel/plugin-transform-react-inline-elements',

        '@babel/plugin-transform-react-constant-elements',
      ],
    },
  },
};

module.exports = config;
