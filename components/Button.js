import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import { IconButton, Button as MBButton, Anchor } from "material-bread";

import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

import Colors from "./Colors";
// import Colors from "../../helpers/Colors";

export const iconsMap = {
  add: <MaterialIcon size={24} name="add" />,
  apps: <MaterialIcon size={24} name="apps" />,
  asc: <MaterialIcon size={24} name="add" />,
  back: <MaterialIcon size={24} name="keyboard-arrow-left" />,
  check: <MaterialIcon size={24} name="check" />,
  desc: <MaterialIcon size={24} name="remove" />,
  edit: <MaterialIcon size={24} name="edit" />,
  entities: <MaterialIcon size={24} name="contacts" />,
  search: <MaterialIcon size={24} name="search" />,
  filter: <MaterialIcon size={24} name="filter" />,
  save: <MaterialIcon size={24} name="save" />,
  saveAlt: <IconButton size={24} name="save-alt" />,
  share: <MaterialIcon size={24} name="share" />,
  delete: <MaterialIcon size={24} name="delete" />,
  redo: <MaterialIcon size={24} name="redo" />,
  list: <MaterialIcon size={24} name="list" />,
  arrowLeft: <MaterialIcon size={24} name="keyboard-arrow-left" />,
  arrowRight: <MaterialIcon size={24} name="keyboard-arrow-right" />,
  settings: <MaterialIcon size={24} name="settings" />,
  info: <MaterialIcon size={24} name="info" />,
  build: <MaterialIcon size={24} name="build" />,
  warning: <MaterialIcon size={24} name="warning" />,
  deleted: <MaterialIcon size={24} name="delete-sweep" />,
  document: <MaterialIcon size={24} name="description" />,
  email: <MaterialIcon size={24} name="email" />,
  phone: <MaterialIcon size={24} name="call" />,
  attachment: <MaterialIcon size={24} name="attachment" />,
  refresh: <MaterialIcon size={24} name="refresh" />,
  logout: <MaterialIcon size={24} name="power-settings-new" />,
  home: <MaterialIcon size={24} name="home" />,
  link: <MaterialIcon size={24} name="link" />,
  help: <MaterialIcon size={24} name="´help" />,
  close: <MaterialIcon size={24} name="close" />,
  poweron: <MaterialCommunityIcon size={24} name="power-plug" />,
  poweroff: <MaterialCommunityIcon size={24} name="power-plug-off" />,
  lock: <MaterialIcon size={24} name="lock" />,
  unlock: <MaterialIcon size={24} name="lock-open" />,
  star: <MaterialIcon size={24} name="star" />,
  emptyStar: <MaterialIcon size={24} name="star-border" />,
  menu: <MaterialIcon size={24} name="menu" />,
  arrowDown: <MaterialIcon size={24} name="arrow-drop-down" />,
  user: <MaterialIcon size={24} name="person" />,
  users: <MaterialIcon size={24} name="group" />,
  up: <MaterialIcon size={24} name="expand-less" />,
  down: <MaterialIcon size={24} name="expand-more" />,
  creditCard: <MaterialIcon size={24} name="credit-card" />,
  launch: <MaterialIcon size={24} name="launch" />,
  waiting: <MaterialIcon size={24} name="schedule" />,
};

// interface IButtonProps {
// 	href?: string;
// 	target?: string;
// 	iconStyle?: any;
// 	variant?: string;
// 	text?: string;
// 	textStyle?: any;
// 	loading?: boolean;
// 	style?: any;
// 	children?: any;
// 	color?: string;
// 	type?: "text" | "outlined" | "contained" | "flat" | "icon";
// 	disabled?: boolean;
// 	icon?: string;
// 	onPress?: () => void;
// 	useInputCasing?: boolean;
// 	onClick?: any;
// 	size?: number | string | any;
// 	fullWidth?: boolean;
// }

// export default class Button extends Component<IButtonProps, any> {
export default class Button extends Component {
  getIconSize = () => {
    const { size } = this.props;

    if (!isNaN(size)) return size;

    // if (size === "small") return 20;
    // if (size === "large") return 35;

    return 24;
  };

  getButtonSize = () => {
    const { size } = this.props;
    let style = { ...styles.button };

    if (size === "small") style = { ...style, height: 30, paddingLeft: 5, paddingRight: 5 };
    if (size === "large") style = { ...style, height: 40, paddingLeft: 20, paddingRight: 20 };

    return style;
  };

  renderButtons() {
    let { iconStyle, variant, text, textStyle, loading, style, color, disabled, icon, type } = this.props;

    if (!color) color = "primary";
    if (disabled === true) color = "disabled";

    let colors = Colors.getButtonColors(color);
    const size = this.getIconSize();

    if (!type && (!variant || variant == "text" || variant == "flat")) {
      type = "text";
      style = { ...this.getButtonSize(), ...styles["text"], ...style };
      colors = {
        color: colors.backgroundColor,
        backgroundColor: colors.color,
      };
    } else {
      if (variant == "rounded") {
        type = "flat";
        style = { ...this.getButtonSize(), ...styles["rounded"], ...style };
      }
      // if (variant == 'raised') {
      // 	// customProps.variant = 'contained';
      // 	MuiButton = Fab;
      // 	variant = 'extended';
      // 	style = { ....style, boxShadow: 'none' };
      // }
      // if (variant === 'fab') {
      // 	MuiButton = Fab;
      // }
    }

    if (type == "icon" || variant == "icon") {
      return (
        <MBButton
          onPress={this.props.onPress ?? this.props.onClick}
          type="text"
          color={colors.backgroundColor}
          textColor={colors.color}
          style={StyleSheet.flatten([
            styles["icon"],
            {
              borderRadius: size + 20,
              height: size + 20,
              width: size + 20,
            },
            style,
          ])}
        >
          {iconsMap[icon]
            ? React.cloneElement(iconsMap[icon], {
                color: colors.color,
                size,
              })
            : null}
        </MBButton>
      );
    }

    return (
      <MBButton
        {...this.props}
        icon={undefined}
        onPress={this.props.onPress ?? this.props.onClick}
        type={type ?? "text"}
        color={colors.backgroundColor}
        textColor={colors.color}
        style={StyleSheet.flatten([style])}
        textStyle={StyleSheet.flatten([styles.textStyle, textStyle])}
      >
        {!loading ? (
          <>
            {!!icon &&
              !!iconsMap[icon] &&
              React.cloneElement(iconsMap[icon], {
                color: colors.color,
                style: iconStyle,
                size,
              })}
            {(!!text || !!this.props.children) && (
              <Text
                style={StyleSheet.flatten([
                  styles.textStyle,
                  {
                    color: colors.color,
                    marginLeft: icon ? 3 : 0,
                  },
                ])}
              >
                {`${text ?? this.props.children}`.toUpperCase()}
              </Text>
            )}
          </>
        ) : null}
      </MBButton>
    );
  }

  render() {
    return (
      <>
        {this.props.href ? (
          <Anchor url={this.props.href} target={this.props.target}>
            {this.renderButtons()}
          </Anchor>
        ) : (
          this.renderButtons()
        )}
      </>
    );
  }
}

const styles = {
  button: {
    paddingLeft: 15,
    paddingRight: 15,
    height: 35,
    minHeight: 0,
    overflow: "hidden",
  },
  rounded: {
    borderRadius: 100,
  },
  text: {
    minWidth: 0,
    borderRadius: 6,
  },
  icon: {
    minWidth: 0,
    minHeight: 0,
    paddingLeft: 0,
    paddingRight: 0,
    padding: 0,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 12.8,
    letterSpacing: 1,
  },
};

// import React, { Component } from "react";
// import { IconButton, Button as MBButton, Anchor } from "material-bread";

// import Colors from "../../helpers/Colors";

// export const iconsMap = {
// 	add: <IconButton size={23} name="add" />,
// 	apps: <IconButton size={23} name="apps" />,
// 	asc: <IconButton size={23} name="add" />,
// 	back: <IconButton size={23} name="keyboard-arrow-left" />,
// 	check: <IconButton size={23} name="check" />,
// 	desc: <IconButton size={23} name="remove" />,
// 	edit: <IconButton size={23} name="edit" />,
// 	entities: <IconButton size={23} name="contacts" />,
// 	search: <IconButton size={23} name="search" />,
// 	filter: <IconButton size={23} name="filter" />,
// 	save: <IconButton size={23} name="save" />,
// 	saveAlt: <IconButton size={23} name="move-to-inbox" />, // Inexact
// 	share: <IconButton size={23} name="share" />,
// 	delete: <IconButton size={23} name="delete" />,
// 	redo: <IconButton size={23} name="redo" />,
// 	list: <IconButton size={23} name="list" />,
// 	arrowLeft: <IconButton size={23} name="keyboard-arrow-left" />,
// 	arrowRight: <IconButton size={23} name="keyboard-arrow-right" />,
// 	settings: <IconButton size={23} name="settings" />,
// 	info: <IconButton size={23} name="info" />,
// 	build: <IconButton size={23} name="build" />,
// 	warning: <IconButton size={23} name="warning" />,
// 	deleted: <IconButton size={23} name="delete-sweep" />,
// 	document: <IconButton size={23} name="description" />,
// 	email: <IconButton size={23} name="email" />,
// 	phone: <IconButton size={23} name="call" />,
// 	attachment: <IconButton size={23} name="attachment" />,
// 	refresh: <IconButton size={23} name="refresh" />,
// 	logout: <IconButton size={23} name="power-settings-new" />,
// 	home: <IconButton size={23} name="home" />,
// 	link: <IconButton size={23} name="link" />,
// 	help: <IconButton size={23} name="´help" />,
// 	close: <IconButton size={23} name="close" />,
// 	poweron: <IconButton size={23} name="power" />,
// 	poweroff: <IconButton size={23} name="flash-off" />, // Not the same
// 	lock: <IconButton size={23} name="lock" />,
// 	unlock: <IconButton size={23} name="lock-open" />, // Inexact
// 	star: <IconButton size={23} name="star" />,
// 	emptyStar: <IconButton size={23} name="star-border" />,
// 	menu: <IconButton size={23} name="menu" />,
// 	arrowDown: <IconButton size={23} name="arrow-drop-down" />,
// 	user: <IconButton size={23} name="person" />,
// 	users: <IconButton size={23} name="group" />,
// 	up: <IconButton size={23} name="expand-less" />,
// 	down: <IconButton size={23} name="expand-more" />,
// 	creditCard: <IconButton size={23} name="credit-card" />,
// 	launch: <IconButton size={23} name="launch" />,
// 	waiting: <IconButton size={23} name="schedule" />,
// };

// interface IButtonProps {
// 	href?: string;
// 	target?: string;
// 	iconStyle?: any;
// 	variant?: string;
// 	text?: string;
// 	textStyle?: any;
// 	loading?: boolean;
// 	style?: any;
// 	children?: any;
// 	color?: string;
// 	type?: "text" | "outlined" | "contained" | "flat";
// 	disabled?: boolean;
// 	icon?: string;
// 	onPress?: () => void;
// 	useInputCasing?: boolean;
// 	onClick?: any;
// 	size?: number;
// 	fullWidth?: boolean;
// }

// export default class Button extends Component<IButtonProps, any> {
// 	renderButtons() {
// 		let {
// 			iconStyle,
// 			variant,
// 			text,
// 			textStyle,
// 			loading,
// 			style,
// 			color,
// 			disabled,
// 			icon,
// 			type,
// 			size,
// 		} = this.props;

// 		if (!color) color = "primary";
// 		if (disabled === true) color = "disabled";

// 		let colors: any = Colors.getButtonColors(color);

// 		return (
// 			<>
// 				{variant === "icon" ? (
// 					<IconButton
// 						size={size ?? 22}
// 						disabled={disabled}
// 						style={{ ...style }}
// 						name={icon}
// 						color={colors.backgroundColor}
// 						onPress={this.props.onPress ?? this.props.onClick}
// 					/>
// 				) : (
// 					<MBButton
// 						{...this.props}
// 						children={undefined}
// 						onPress={this.props.onPress ?? this.props.onClick}
// 						text={
// 							!loading
// 								? this.props.children ?? text ?? undefined
// 								: undefined
// 						}
// 						type={type ? type : "flat"}
// 						color={colors.backgroundColor}
// 						style={
// 							variant === "rounded"
// 								? {
// 										paddingLeft: 20,
// 										paddingRight: 20,
// 										borderRadius: 50,
// 										height: 50,
// 										overflow: "hidden",
// 										...style,
// 								  }
// 								: icon && !text
// 								? {
// 										paddingLeft: 20,
// 										paddingRight: 20,
// 										borderRadius: 50,
// 										overflow: "hidden",
// 										...style,
// 								  }
// 								: {
// 										borderRadius: 6,
// 										paddingLeft: 5,
// 										paddingRight: 5,
// 										minWidth: 0,
// 										overflow: "hidden",
// 										...style,
// 								  }
// 						}
// 						textStyle={{
// 							// fontWeight: type === "text" ? "500" : "bold",
// 							fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
// 							fontSize: 12.8,
// 							...textStyle,
// 						}}
// 						textColor={colors.color}
// 						iconPosition="right"
// 						icon={
// 							icon ? (
// 								<IconButton
// 									size={size ?? 22}
// 									color={colors.backgroundColor}
// 									style={iconStyle}
// 									name={icon}
// 									onPress={
// 										this.props.onPress ?? this.props.onClick
// 									}
// 								/>
// 							) : undefined
// 						}
// 					/>
// 				)}
// 			</>
// 		);
// 	}

// 	render() {
// 		return (
// 			<>
// 				{this.props.href ? (
// 					<Anchor url={this.props.href} target={this.props.target}>
// 						{this.renderButtons()}
// 					</Anchor>
// 				) : (
// 					this.renderButtons()
// 				)}
// 			</>
// 		);
// 	}
// }
