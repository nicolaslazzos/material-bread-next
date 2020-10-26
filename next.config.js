const withTM = require("next-transpile-modules");
const withFonts = require("next-fonts");

module.exports = withFonts(
  withTM({
    transpileModules: [
      "material-bread",
      "react-native-svg",
      "react-native-vector-icons",
      "@react-native-community/toolbar-android"
    ],
    webpack: (config) => {
      config.resolve.extensions = [".web.js", ".js"];
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        "react-native$": "react-native-web",
        "react-native-svg$": "react-native-svg-web",
        'react-native/Libraries/Components/UnimplementedViews/UnimplementedView$': 'react-native-web/dist/modules/UnimplementedView'
      };
      return config;
    },
  })
);
