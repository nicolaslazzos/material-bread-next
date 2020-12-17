const withFonts = require("next-fonts");
const withTM = require("next-transpile-modules")([
  "material-bread",
  "react-native-svg",
  "react-native-vector-icons",
  "@react-native-community/toolbar-android",
  "react-native",
  "react-native-paper",
  "react-native-iphone-x-helper",
  "react-native-safe-area-view"
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
    config.module.rules.push({
      test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
      loader: "file-loader",
    });
    return config;
  },
};

module.exports = withPlugins(plugins, nextOptions);
