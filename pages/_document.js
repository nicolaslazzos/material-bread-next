import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import { AppRegistry } from "react-native";
import config from "../app.json";

const normalizeNextElements = `
html,
body,
#__next {
  height: 100%;
  font-family: Roboto, sans-serif;
}

@import url("https://fonts.googleapis.com/css?family=Roboto");

@font-face {
  src: url(${require("react-native-vector-icons/Fonts/MaterialIcons.ttf")});
  font-family: MaterialIcons;
}  

@font-face {
  src: url(${require("react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf")});
  font-family: MaterialCommunityIcons;
} 
`;

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    AppRegistry.registerComponent(config.name, () => Main);
    const { getStyleElement } = AppRegistry.getApplication(config.name);
    const page = renderPage();

    const styles = [<style dangerouslySetInnerHTML={{ __html: normalizeNextElements }} />, getStyleElement()];
    return { ...page, styles: React.Children.toArray(styles) };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
