import React from "react";
import {
	createStyles,
	alpha,
	Theme,
	ThemeProvider,
	withStyles,
	makeStyles,
	createTheme,
} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";
import { green } from "@material-ui/core/colors";

const BootstrapInput = withStyles((theme) =>
	createStyles({
		root: {
			"label + &": {
				marginTop: theme.spacing(3),
			},
		},
		input: {
			borderRadius: 4,
			position: "relative",
			backgroundColor: theme.palette.common.white,
			border: "1px solid #ced4da",
			fontSize: 16,
			width: "auto",
			padding: "10px 12px",
			transition: theme.transitions.create(["border-color", "box-shadow"]),
			// Use the system font instead of the default Roboto font.
			fontFamily: [
				"-apple-system",
				"BlinkMacSystemFont",
				'"Segoe UI"',
				"Roboto",
				'"Helvetica Neue"',
				"Arial",
				"sans-serif",
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
			].join(","),
			"&:focus": {
				boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
				borderColor: "#cfe8fc",
			},
		},
	})
)(InputBase);

const useStylesReddit = makeStyles((theme) =>
	createStyles({
		root: {
			border: "1px solid #e2e2e1",
			overflow: "hidden",
			borderRadius: 4,
			backgroundColor: "#cfe8fc",
			transition: theme.transitions.create(["border-color", "box-shadow"]),
			"&:hover": {
				backgroundColor: "#cfe8fc",
			},
			"&$focused": {
				backgroundColor: "#cfe8fc",
				boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
				borderColor: theme.palette.primary.main,
			},
		},
		focused: {},
	})
);

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			display: "flex",
			flexWrap: "wrap",
		},
		margin: {
			margin: theme.spacing(1),
		},
	})
);

const theme = createTheme({
	palette: {
		primary: green,
	},
});

export default function CustomInput() {
	const classes = useStyles();

	return (
		<form className={classes.root} noValidate>
			<FormControl className={classes.margin}>
				<InputLabel shrink htmlFor="bootstrap-input">
					Bootstrap
				</InputLabel>
				<BootstrapInput defaultValue="react-bootstrap" id="bootstrap-input" />
			</FormControl>
		</form>
	);
}