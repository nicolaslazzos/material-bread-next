import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

export default function InputContainer(props) {
  // color
  const mainColor = props.color || "black";
  const blurColor = "grey";
  const errorColor = "red";
  // border style
  const focusStyle = { borderStyle: { borderWidth: 2.5, borderColor: mainColor }, color: mainColor };
  const blurStyle = { borderStyle: { borderWidth: 0.5, borderColor: blurColor }, color: blurColor };
  // hooks
  const [dynamicStyle, setDynamicStyle] = useState(blurStyle);

  useEffect(() => {
    const { inputFocused, errorMessage } = props;

    if (errorMessage) {
      setDynamicStyle({
        borderStyle: { borderWidth: inputFocused ? 2.5 : 0.5, borderColor: errorColor },
        color: errorColor,
      });
    } else if (inputFocused) {
      setDynamicStyle(focusStyle);
    } else if (!inputFocused) {
      setDynamicStyle(blurStyle);
    }
  }, [props.errorMessage, props.inputFocused]);

  const { color, borderStyle } = dynamicStyle;

  return (
    <View style={props.containerStyle}>
      <View style={{ ...styles.inputContainerStyle, display: 'inline-grid' }}>
        <View style={{ ...styles.inputBorderStyle, ...borderStyle }}>
          {props.children}
        </View>
        {!!props.errorMessage && (
          <Text style={{ ...styles.textStyle, ...styles.errorMessageStyle }}>{props.errorMessage}</Text>
        )}
        {!!props.description && (
          <Text style={{ ...styles.textStyle, ...styles.descriptionStyle }}>{props.description}</Text>
        )}
        {!!props.label && (props.inputFocused || props.inputHasValue) && (
          <Text ellipsizeMode="tail" numberOfLines={1} style={{ ...styles.textStyle, ...styles.labelStyle, color }}>
            {props.label}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = {
  inputContainerStyle: { paddingVertical: 5, paddingTop: 9 },
  inputBorderStyle: { flexDirection: "row", borderRadius: 4, marginBottom: 3, height: 40 },
  textStyle: { fontSize: 13, paddingHorizontal: 3, marginLeft: 6, marginRight: 6 },
  labelStyle: { position: "absolute", backgroundColor: "white", marginLeft: 9, marginRight: 9 },
  descriptionStyle: { color: "grey" },
  errorMessageStyle: { color: "red" },
  iconContainerStyle: { alignItems: "center", justifyContent: "center" },
};
