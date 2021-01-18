import React, { useRef, useEffect } from "react";
import { View, StyleSheet, Animated } from "react-native";

import Colors from "./Colors";

const App = () => {
  let left = useRef(new Animated.Value(0)).current;
  let right = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    start();
  }, []);

  const start = async () => {
    right.resetAnimation();
    left.resetAnimation();

    Animated.timing(right, {
      toValue: 0,
      duration: 1000,
    }).start();

    await new Promise((resolve) => setTimeout(resolve, 500));

    Animated.timing(left, {
      toValue: 100,
      duration: 1000,
    }).start(start);
  };

  const marginRight = right.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp",
  });

  const marginLeft = left.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[StyleSheet.absoluteFill, { backgroundColor: Colors.secondary, marginLeft, marginRight }]}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.flatten([
  {
    container: {
      // flexDirection: "row",
      // height: 15,
      // opacity: 0.2,
      // width: "100%",
      // backgroundColor: Colors.secondary,

      flexDirection: "row",
      height: 4,
      width: "100%",
      backgroundColor: "#e2ccff",
      // borderColor: "#000",
      // borderWidth: 2,
      // borderRadius: 5,
    },
  },
]);
