import React, { useState } from "react";
import { TextInput as RNTextInput } from "react-native";

import InputContainer from "../input-container/InputContainer";

export default function TextInput(props) {
  const mainColor = props.color || "#6f00ff";

  const [focused, setFocused] = useState(false);

  const onFocus = (e) => {
    setFocused(true);
    props?.onFocus?.(e);
  };

  const onBlur = (e) => {
    setFocused(false);
    props?.onBlur?.(e);
  };

  const getKeyboardType = () => {
    if (!props.type) return "default";

    switch (props.type) {
      case "email":
      case "email-address":
        return "email-address";
      case "phone":
      case "phone-pad":
        return "phone-pad";
      case "month":
      case "numeric":
        return "numeric";
      case "number-pad":
        return "number-pad";
      default:
        return "default";
    }
  };

  const keyboardType = getKeyboardType();

  return (
    <InputContainer
      {...props}
      inputFocused={props.inputFocused ?? focused}
      inputHasValue={!!props.value}
      color={mainColor}
    >
      <RNTextInput
        {...props}
        placeholder={focused ? undefined : props.label}
        placeholderTextColor={props.placeholderTextColor || "grey"}
        selectionColor={mainColor}
        keyboardType={props.keyboardType || keyboardType}
        onFocus={onFocus}
        onBlur={onBlur}
        editable={!props.disabled}
        style={[styles.textInputStyle, props.style]}
      />
    </InputContainer>
  );
}

const styles = {
  textInputStyle: { height: 35, paddingHorizontal: 12, fontSize: 16, flex: 1, outline: "none" },
};
