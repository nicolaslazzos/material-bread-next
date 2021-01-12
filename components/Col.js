import React from "react";
import { View, Dimensions } from "react-native";

// if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
//   UIManager.setLayoutAnimationEnabledExperimental(true);
// }

// const animation = LayoutAnimation.create(200, LayoutAnimation.Types.easeInEaseOut, LayoutAnimation.Properties.scaleXY);

const getSize = (sizes = {}) => {
  const width = typeof window !== "undefined" ? window.innerWidth : Dimensions.get("window").width;
  // const width = Dimensions.get("window").width;

  if (width > 0 && width < 418) {
    return sizes["xs"] || 12;
  } else if (width > 417 && width < 768) {
    return sizes["sm"] || 12;
  } else if (width > 767 && width < 1024) {
    return sizes["md"] || 6;
  } else if (width > 1023 && width < 1525) {
    return sizes["lg"] || 4;
  } else if (width > 1524) {
    return sizes["xl"] || 3;
  }
};

export default function Grid({ style, children, ...props }) {
  const [columns, setColumns] = React.useState(getSize(props));

  React.useEffect(() => {
    // const orientationListener = ScreenOrientation.addOrientationChangeListener(updateColumns);
    window.addEventListener("resize", updateColumns);

    // return () => ScreenOrientation.removeOrientationChangeListener(orientationListener);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const updateColumns = () => {
    // LayoutAnimation.configureNext(animation);
    const cols = getSize(props);
    
    setColumns(cols);
  };

  return React.Children.map(children, (child) => <View style={[styles[`col_${columns}`], style]}>{child}</View>);
}

const colWidth = 100 / 12;
const columnsMargin = 15;

const styles = {
  col_1: {
    width: colWidth * 1 + "%",
    paddingRight: columnsMargin,
  },
  col_2: {
    width: colWidth * 2 + "%",
    paddingRight: columnsMargin,
  },
  col_3: {
    width: colWidth * 3 + "%",
    paddingRight: columnsMargin,
  },
  col_4: {
    width: colWidth * 4 + "%",
    paddingRight: columnsMargin,
  },
  col_5: {
    width: colWidth * 5 + "%",
    paddingRight: columnsMargin,
  },
  col_6: {
    width: colWidth * 6 + "%",
    paddingRight: columnsMargin,
  },
  col_7: {
    width: colWidth * 7 + "%",
    paddingRight: columnsMargin,
  },
  col_8: {
    width: colWidth * 8 + "%",
    paddingRight: columnsMargin,
  },
  col_9: {
    width: colWidth * 9 + "%",
    paddingRight: columnsMargin,
  },
  col_10: {
    width: colWidth * 10 + "%",
    paddingRight: columnsMargin,
  },
  col_11: {
    width: colWidth * 11 + "%",
    paddingRight: columnsMargin,
  },
  col_12: {
    width: colWidth * 12 + "%",
    paddingRight: columnsMargin,
  },
};
