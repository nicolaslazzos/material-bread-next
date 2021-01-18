import React from "react";
import dynamic from "next/dynamic";
import { View, StyleSheet } from "react-native";

// interface RowProps extends React.PropsWithChildren<any> {
// 	xs?: number;
// 	sm?: number;
// 	md?: number;
// 	lg?: number;
// 	xl?: number;
// 	style?: any;
// }

const getSize = (width) => {
  if (!width) return;

  let size;

  if (width > 0 && width <= 600) {
    size = "xs";
  } else if (width > 600 && width <= 960) {
    size = "sm";
  } else if (width > 960 && width <= 1280) {
    size = "md";
  } else if (width > 1280 && width <= 1920) {
    size = "lg";
  } else {
    size = "xl";
  }

  return size;
};

const ReactResizeDetector = dynamic(() => import("react-resize-detector"), {
  ssr: false,
});

const Row = ({ style, children, ...props }) => {
  const [size, setSize] = React.useState("xl");
  const container = React.useRef(null);

  const updateColumns = async (width) => setSize(getSize(width) ?? size);

  return (
    <ReactResizeDetector targetRef={container} handleWidth onResize={updateColumns}>
  <View style={StyleSheet.flatten([styles.col, styles[`col_${props[size] ?? 12}`], style])}>{children}</View>
    </ReactResizeDetector>
  );
};

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

export default Row;
