module.exports = function (api) {
  api.cache(true);

  return {
    plugins: [],
    presets: [
      ['module:@react-native/babel-preset', { useTransformReactJSX: true }],
    ],
  };
};
