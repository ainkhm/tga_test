import React from "react";
import useStyles from "./use-styles";

export default function Content(props) {
	const styles = useStyles();

	return <main>{props.children}</main>;
}
