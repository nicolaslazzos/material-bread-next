import React, { PureComponent } from "react";

import { Avatar as BreadAvatar } from "material-bread";

import { Image, View, Text, TouchableWithoutFeedback } from "react-native";

// export interface IAvatarProps {
// 	src?: any;
// 	letter?: string;
// 	style: any;
// 	size: number;
// 	variant?: string;
// }

export class Avatar extends PureComponent {
  // export class Avatar extends PureComponent<any, any> {
  // static defaultProps: any = {
  // 	style: {
  // 		width: 40,
  // 		height: 40,
  // 		borderRadius: 40,
  // 	},
  // };

  // private getImage() {
  getImage() {
    let img = "https://res.mobbex.com/images/icons/mobbex.png";

    // Check src
    if (this.props.src) {
      let { src } = this.props;

      // Find mobbex standard versions
      if (src.versions) {
        // Take as case when versions is there but is empty... use default.
        if (src.versions.length > 0) {
          let square = src.versions.find((r) => r.indexOf("-square") != -1);

          img = square ? square : src.versions.pop();
        }
      } else {
        img = src;
      }
    }

    return img;
  }

  getSize = () => {
    let { size } = this.props;
    const { height, width } = this.props.style;

    if (height && width) size = Math.min(height, width);
    if (!height && width) size = width;
    if (height && !width) size = height;

    return size ?? 45;
  };

  render() {
    // public render() {
    let options = {
        style: { backgroundColor: this.props.color ?? "transparent", overflow: "hidden", ...this.props.style },
      },
      children = null,
      size = this.getSize();

    if (this.props.src) {
      options.src = this.getImage();
    }

    if (this.props.letter) {
      children = this.props.letter;
    }

    options.style = {
      width: size,
      height: size,
      borderRadius: this.props.variant === "square" ? 0 : size,
      ...options.style,
    };

    // if (this.props.className) {
    // 	options.className = this.props.className;
    // }

    // if (this.props.variant) {
    // 	options.variant = this.props.variant;
    // }

    let cmp = null;

    if (this.props.letter) {
      options.style = { justifyContent: "center", alignItems: "center", ...options.style };
      options.textStyle = { fontSize: size / 2.4, fontWeight: 500, marginBottom: size / 30 };

      cmp = (
        <View style={options.style}>
          <Text style={options.textStyle}>{this.props.letter[0].toUpperCase()}</Text>
        </View>
      );
    } else {
      cmp = <Image style={options.style} source={{ uri: options.src }} />;
    }

    return (
      <TouchableWithoutFeedback onPress={this.props.onPress ?? this.props.onClick}>{cmp}</TouchableWithoutFeedback>
    );

    // return (
    // 	<BreadAvatar
    // 		size={this.props.size ?? 45}
    // 		style={options.style}
    // 		contentStyles={options.contentStyle}
    // 		type={"image"}
    // 		image={<Image source={{ uri: options.src }} />}
    // 	/>
    // );
  }
}
