const withFonts = require("next-fonts");
const withTM = require("next-transpile-modules")([
  "material-bread",
  "react-native-svg",
  "react-native-vector-icons",
  "react-native-material-ripple",
  "react-native",
  "react-native-web",
  "react-native-popup-menu",
  "react-native-material-menu",
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
      "react-native-web/src": "react-native-web/dist",
    };
    return config;
  },
};

module.exports = withPlugins(plugins, nextOptions);
