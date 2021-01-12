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
  // const getSize = (width: number) => {
  if (!width) return;

  let size = "xl";

  if (width > 0 && width <= 600) {
    size = "xs";
  } else if (width > 600 && width <= 960) {
    size = "sm";
  } else if (width > 960 && width <= 1280) {
    size = "md";
  } else if (width > 1280 && width <= 1920) {
    size = "lg";
  } else if (width > 1920) {
    size = "xl";
  }

  console.log(width, size);

  return size;
};

const ReactResizeDetector = dynamic(() => import("react-resize-detector"), {
  ssr: false,
});

const Row = ({ style, children, ...props }) => {
  // const Row = ({ style, children, ...props }: RowProps) => {
  const [size, setSize] = React.useState("xl");
  const container = React.useRef(null);

  const updateColumns = async (width) => setSize(getSize(width));
  // const updateColumns = async (width: number) => setSize(getSize(width));

  return (
    <ReactResizeDetector targetRef={container} handleWidth onResize={updateColumns}>
      <View ref={container} style={StyleSheet.flatten([styles.row, style])}>
        {React.Children.map(children, (child) => React.cloneElement(child, { ...props, size }))}
      </View>
    </ReactResizeDetector>
  );
};

const columnsMargin = 15;

const styles = StyleSheet.flatten([
  {
    row: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginRight: -columnsMargin,
    },
  },
]);

export default Row;
