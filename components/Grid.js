import React from "react";

import Row from "./Row";
import Col from "./ColV2";

export default function Grid({ colStyle, rowStyle, children, ...props }) {
  return (
    <Row style={rowStyle} {...props}>
      {React.Children.map(children, (child) => (
        <Col style={colStyle}>{child}</Col>
      ))}
    </Row>
  );
}
