import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import { AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
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
  src: url(/static/MaterialIcons.ttf);
  font-family: MaterialIcons;
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
          <style
            dangerouslySetInnerHTML={{
              __html: `@font-face {
                          font-family: MaterialCommunityIcons;
                          src: url(/static/MaterialCommunityIcons.ttf);
                        }
                        input {
                          outline: none !important;
                        }`,
            }}
          />
        </Head>

        <body>
          <PaperProvider>
            <Main />
          </PaperProvider>
          <NextScript />
        </body>
      </Html>
    );
  }
}
