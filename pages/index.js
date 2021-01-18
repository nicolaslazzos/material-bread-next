import React from "react";
import { View, Text, Image } from "react-native";
import {
  Backdrop,
  List,
  ListItem,
  Icon,
  IconButton,
  // Avatar,
  Heading,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from "material-bread";

import Grid from "../components/Grid";
import Col from "../components/ColV2";
import Row from "../components/Row";
import Card from "../components/Card";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";
import Snackbar from "../components/Snackbar";
import { Avatar } from "../components/Avatar";
import TextInput from "../components/text-input/TextInput";

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

    <List
      style={{
        width: "100%",
        backgroundColor: "transparent",
      }}
    >
      <ListItem
        text={"Home"}
        textStyle={{ color: "white" }}
        selected
        style={{ backgroundColor: "transparent" }}
        icon={<Icon name={"home"} size={24} color={"white"} />}
      />
      <ListItem
        text={"Music"}
        textStyle={{ color: "white" }}
        style={{ backgroundColor: "transparent" }}
        icon={<Icon name={"music-note"} size={24} color={"white"} />}
      />
      <ListItem
        text={"Favorites"}
        textStyle={{ color: "white" }}
        style={{ backgroundColor: "transparent" }}
        icon={<Icon name={"favorite"} size={24} color={"white"} />}
      />
      <ListItem
        text={"Settings"}
        textStyle={{ color: "white" }}
        style={{ backgroundColor: "transparent" }}
        icon={<Icon name={"settings"} size={24} color={"white"} />}
      />
    </List>
  </View>
);

const album = <Avatar type="icon" content="album" contentColor={"#ececec"} color={"#a3a3a3"} size={40} />;
const iconFav = <IconButton name="favorite" size={24} color="#6e6e6e" />;

export default class Page extends React.Component {
  renderTiles = (n) => {
    return Array.apply(null, Array(n))
      .map(function (x, i) {
        return i;
      })
      .map((a, i) => (
        <Col xs={12} sm={12} md={3}>
          <Card style={{ width: "100%", flex: 1, marginBottom: 15 }}>
            <CardHeader
              // thumbnail={
              //   <Avatar
              //     type="image"
              //     image={
              //       <Image
              //         source={{
              //           uri:
              //             "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/john-snow-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg",
              //         }}
              //       />
              //     }
              //     size={40}
              //   />
              // }
              title={"Jon Snow"}
              subtitle={"Knows Nothing, KingofDaNorth"}
              action={<IconButton name="more-vert" size={24} />}
            />

            {/* <CardMedia
            image={
              <Image
                style={{ flex: 1, width: "100%" }}
                source={{ uri: "https://i.redd.it/zj9vfr7uuljz.png" }}
                resizeMode="cover"
              />
            }
          />
          <CardContent>
            <Text style={{ color: "rgba(0,0,0,.6)", fontSize: 14 }}>
              Ran out of bleach for beard, but Daenerys says it looks cool.
            </Text>
          </CardContent> */}
            <CardActions rightActionItems={[{ name: "thumb-up" }, { name: "share" }]} />
            {i === 4 && <Snackbar />}
          </Card>
        </Col>
      ));
  };

  render() {
    return (
      <View style={{ marginBottom: 80 }}>
        <Backdrop
          backLayerConcealed={
            <View style={styles.backdropHeader}>
              <Text style={styles.backdropHeaderTitle}>Material Bread Next</Text>
            </View>
          }
          backLayerRevealed={backLayerRevealed}
          offset={260}
        >
          <ProgressBar />
          <View style={{ flex: 1 }}>
            <Heading
              text={"Albums"}
              style={{
                alignSelf: "flex-start",
                marginLeft: 20,
                fontSize: 20,
              }}
            />
            <TextInput label="Name" value="Nicolas Lazzos" />
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
        </Backdrop>
      </View>
    );
  }
}
