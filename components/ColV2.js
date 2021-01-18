import React from "react";
import { View, StyleSheet } from "react-native";

// interface ColProps extends React.PropsWithChildren<any> {
// 	xs?: number;
// 	sm?: number;
// 	md?: number;
// 	lg?: number;
// 	xl?: number;
// 	size?: string;
// 	style?: any;
// }

const Col = ({ style, children, size, ...props }) => (
  <View style={[styles.col, styles[`col_${props[size] ?? 12}`], style]}>{children}</View>
);

const colWidth = 100 / 12;
const columnsMargin = 15;

const styles = StyleSheet.flatten([
  {
    col: {
      paddingRight: columnsMargin,
      paddingBottom: columnsMargin,
    },
    col_1: {
      width: colWidth * 1 + "%",
    },
    col_2: {
      width: colWidth * 2 + "%",
    },
    col_3: {
      width: colWidth * 3 + "%",
    },
    col_4: {
      width: colWidth * 4 + "%",
    },
    col_5: {
      width: colWidth * 5 + "%",
    },
    col_6: {
      width: colWidth * 6 + "%",
    },
    col_7: {
      width: colWidth * 7 + "%",
    },
    col_8: {
      width: colWidth * 8 + "%",
    },
    col_9: {
      width: colWidth * 9 + "%",
    },
    col_10: {
      width: colWidth * 10 + "%",
    },
    col_11: {
      width: colWidth * 11 + "%",
    },
    col_12: {
      width: colWidth * 12 + "%",
    },
  },
]);

export default Col;
