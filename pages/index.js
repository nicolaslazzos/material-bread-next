import React from "react";
import { View } from "react-native";

import { TextInput, Button } from "react-native-paper";
import { Button as MBButton, TextField, Icon } from "material-bread";

export default class Page extends React.Component {
  render() {
    return (
      <View style={{ padding: 50, width: "50%" }}>
        <TextInput
          label="Email"
          onChangeText={(text) => console.log(text)}
          mode="outlined"
          style={{ marginBottom: 15 }}
        />
        <Button icon="camera" mode="contained" onPress={() => console.log("Pressed")} style={{ marginBottom: 15 }}>
          Press me
        </Button>
        <TextField type={"outlined"} label={"Email"} style={{ marginBottom: 15 }} />
        <MBButton
          text={"Press me"}
          type="contained"
          style={{ flex: 1 }}
          icon={<Icon name="delete" size={24} color={"white"} />}
        />
      </View>
    );
  }
}
