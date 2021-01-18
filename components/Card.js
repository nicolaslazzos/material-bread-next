import React from "react";
import { StyleSheet, View } from "react-native";

export default function Card(props) {
  let { style, outlined, onPress, children } = props;

  if (props.centered === true) {
    style = { marginLeft: "auto", marginRight: "auto", ...style };
  }

  return <View style={StyleSheet.flatten([styles.cardStyle, style])}>{children}</View>;
}

const styles = {
  cardStyle: {
    overflow: "hidden",
    borderRadius: 18,
    padding: 15,
    borderWidth: 0.5,
    borderColor: "grey",
  },
};
