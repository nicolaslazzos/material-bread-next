import React from "react";
import { StyleSheet } from "react-native";
import { Paper, Ripple } from "material-bread";

export default function Card(props) {
  const _renderRipple = () => {
    const { children, onPress, rippleProps } = props;

    return (
      <Ripple style={[{ flex: 1 }]} onPress={onPress} {...rippleProps}>
        {children}
      </Ripple>
    );
  };

  let { style, outlined, onPress, shadow, children, testID } = props;

  if (props.centered === true) {
    style = { marginLeft: "auto", marginRight: "auto", ...style };
  }

  return (
    <Paper
      shadow={shadow}
      radius={6}
      style={StyleSheet.flatten([styles.cardStyle, { borderWidth: outlined ? StyleSheet.hairlineWidth : 0 }, style])}
      testID={testID}
    >
      {onPress ? _renderRipple() : children}
    </Paper>
  );
}

const styles = {
  cardStyle: { borderBottomColor: "rgba(0,0,0,.4)", overflow: "hidden", borderRadius: 18 },
};
