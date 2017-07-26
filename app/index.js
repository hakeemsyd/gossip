import React from "react";
import { SignedOut, SignedIn } from "./router";

export default class App extends React.Component {
	render() {
	    console.log('hakeem is here');
		return <SignedIn />;
	}
}
