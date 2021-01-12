const Colors = {
	primary: "white",
	secondary: "#6f00ff",
	background: "#C8DCEC",
	button: {
		primary: "#6f00ff",
		secondary: "#ffffff",
		warning: "#E50473",
		default: "#263238",
		textSecondary: "#f50057",
	},
	field: {
		border: "#C8DCEC",
	},
	loggedIn: {
		background: "#ECF2F6",
	},
	tile: {
		background: "white",
	},

	getButtonColors: (type) => {
		if (type == "primary") {
			return {
				backgroundColor: Colors.button.primary,
				color: Colors.button.secondary,
			};
		} else if (type == "textSecondary" || type == "default") {
			return {
				backgroundColor: Colors.button.textSecondary,
				color: Colors.button.secondary,
			};
		} else if (type == "warning") {
			return {
				backgroundColor: Colors.button.warning,
				color: "white",
			};
		} else if (type == "disabled") {
			return {
				backgroundColor: "#dbdbdb",
				color: "white",
			};
		} else if (type == "textPrimary") {
			return {
				backgroundColor: "transparent",
				color: Colors.button.primary,
			};
		} else if (type == "secondary") {
			return {
				backgroundColor: "transparent",
				color: Colors.button.textSecondary,
			};
		}
	},
};

export default Colors;
