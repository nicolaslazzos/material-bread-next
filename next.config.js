const withFonts = require("next-fonts");
const withTM = require("next-transpile-modules")([
  "material-bread",
  "react-native-svg",
  "react-native-vector-icons",
  "@react-native-community/toolbar-android",
  "react-native",
  "react-native-easy-grid",
  "react-native-responsive-grid",
  "react-native-responsive-grid-system",
  "react-native-responsive-grid-styles",
]);

const withPlugins = require("next-compose-plugins");

const plugins = [withFonts, withTM];

let nextOptions = {
  webpack: (config) => {
    config.resolve.extensions = [".web.js", ".js"];
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web",
      "react-native-svg$": "react-native-svg-web",
      "react-native/Libraries/Components/UnimplementedViews/UnimplementedView$":
        "react-native-web/dist/modules/UnimplementedView",
    };
    return config;
  },
};

module.exports = withPlugins(plugins, nextOptions);
