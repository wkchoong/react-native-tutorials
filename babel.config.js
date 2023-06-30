module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          '@src': './src',
          '@assets': './src/assets',
          '@modules': './src/modules',
          '@types': './src/types',
          '@inputs': './src/inputs',
        },
      },
    ],
    '@babel/plugin-proposal-export-namespace-from',
  ],
};
