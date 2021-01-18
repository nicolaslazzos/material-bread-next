import React from "react";
import { Platform, View, Text } from "react-native";

export default class SimpleSnackbar extends React.Component {
  state = {
    open: true,

    text: "Snackbar de prueba",
    autoHide: 3000,
  };

  resolve = false;
  reject = false;

  show(options) {
    return new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;

      this.setState({ open: true, ...options }, this.autoHide);
    });
  }

  handleClose() {
    try {
      this.resolve();
    } catch (e) {}
    this.reset();
  }

  reset() {
    this.resolve = false;
    this.reject = false;

    this.setState({ open: false, text: "" });
  }

  autoHide = () => {
    const { autoHide } = this.state;

    if (!autoHide) return;
    setTimeout(this.handleClose.bind(this), autoHide);
  };

  render() {
    const { open, text } = this.state;
    let { style } = this.props;

    style = Platform.OS == "web" ? { ...style } : { ...style, left: 20 };

    return (
      <>
        {open && (
          <View
            className="snackbar"
            style={{
              padding: 15,
              borderRadius: 6,
              backgroundColor: "#333333",
              position: "fixed",
              bottom: 20,
              right: 20,
              maxWidth: 500,
              borderWidth: 0,
              margin: 0,
              display: "flex",
              zIndex: 999999,
              ...style,
            }}
          >
            <Text style={{ color: "white" }}>{text}</Text>
          </View>
        )}
      </>
    );
  }
}
