import React from "react";
import { View, Text } from "react-native";
// import { Card, IconButton as MaterialIcons, TextField as TextInput } from "material-bread";

// import Grid from "../components/Grid";
// import Col from "../components/ColV2";
// import Row from "../components/Row";
import Card from "../components/Card";
import ProgressBar from "../components/ProgressBar";
import Snackbar from "../components/Snackbar";
import { Avatar } from "../components/Avatar";
import TextInput from "../components/text-input/TextInput";

import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";

// import { Col, Row } from "react-native-responsive-grid-system";
// import { Col, Row, Grid } from "react-native-easy-grid";
// import { Row, Column as Col, Grid } from "react-native-responsive-grid";
import { Col, Row } from "react-styled-flexboxgrid";

const styles = {
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: "center",
  },
  backdropHeader: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
  },
  backdropHeaderTitle: {
    fontSize: 18,
    color: "white",
    fontWeight: "500",
    marginLeft: 72,
  },
};

const backLayerRevealed = (
  <View style={{ flex: 1, width: "100%" }}>
    <View style={styles.backdropHeader}>
      <Text style={styles.backdropHeaderTitle}>Navigation</Text>
    </View>
  </View>
);

const album = <Avatar type="icon" content="album" contentColor={"#ececec"} color={"#a3a3a3"} size={40} />;

export default class Page extends React.Component {
  renderTiles = (n) => {
    return Array.apply(null, Array(n))
      .map(function (x, i) {
        return i;
      })
      .map((a, i) => (
        <Col xs={12} sm={6} md={4} lg={3} key={i}>
          <Card style={{ width: "100%", flex: 1, margin: 10, padding: 15 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Avatar
                src="https://digitalsport.co/wp-content/uploads/2020/07/2020-07-19T141855Z_917227748_RC2EWH97M68A_RTRMADP_3_MOTOR-F1-HUNGARY.jpg"
                size={40}
                style={{ marginRight: 10 }}
              />
              <View>
                <Text>Card de prueba</Text>
                <Text>Card de prueba</Text>
                <Text>Card de prueba</Text>
              </View>
            </View>
            <TextInput label="Name" value="Nicolas Lazzos" />
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name="close" color="black" size={30} />
              <MaterialIcons name="delete" color="black" size={30} />
            </View>
          </Card>
        </Col>
      ));
  };

  render() {
    return (
      <View style={{ marginBottom: 80 }}>
        <View style={{ flex: 1 }}>
          <TextInput label="Name" value="Texto de prueba" />
          {/* <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <Button icon="close" text="Small" size="small" style={{ marginRight: 10 }} />
              <Button icon="close" text="Medium" style={{ marginRight: 10 }} />
              <Button icon="close" text="Large" size="large" style={{ marginRight: 10 }} />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <Button icon="close" text="Small" variant="rounded" size="small" style={{ marginRight: 10 }} />
              <Button icon="close" text="Medium" variant="rounded" style={{ marginRight: 10 }} />
              <Button icon="close" text="Large" variant="rounded" size="large" style={{ marginRight: 10 }} />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <Button icon="close" size="small" type="icon" color="textPrimary" style={{ marginRight: 10 }} />
              <Button icon="close" type="icon" color="textPrimary" style={{ marginRight: 10 }} />
              <Button icon="close" type="icon" size="large" color="textPrimary" style={{ marginRight: 10 }} />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <Avatar letter={"A"} style={{ marginRight: 10, borderWidth: 1, borderColor: "black" }} />
              <Avatar letter={"A"} variant="square" style={{ marginRight: 10, borderWidth: 1, borderColor: "black" }} />
              <Avatar src="https://i.redd.it/zj9vfr7uuljz.png" style={{ marginRight: 10 }} />
              <Avatar src="https://i.redd.it/zj9vfr7uuljz.png" variant="square" style={{ marginRight: 10 }} />
            </View> */}
          {/* <Row>
              <Col xs={12} sm={12} md={12} lg={8} xl={9}>
                {this.renderTiles(1)}
              </Col>

              <Col xs={12} sm={12} md={12} lg={4} xl={3}>
                <Row>
                  <Col lg={12} xl={12}>
                    {this.renderTiles(3)}
                  </Col>
                </Row>
              </Col>
            </Row> */}
          <br />
          <h2>Separador</h2>
          <br />
          <Row>{this.renderTiles(35)}</Row>
        </View>
      </View>
    );
  }
}
