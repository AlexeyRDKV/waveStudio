module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          src: './src',
          app: './App',
        },
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
  ],
};
