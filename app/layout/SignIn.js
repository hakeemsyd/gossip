import React from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";

export default () => (
    //console.log('Hakeem is here');
	<View style={{ paddingVertical: 20 }}>
	<Card title="SIGN IN">
	<FormLabel>Email</FormLabel>
	<FormInput placeholder="Email address..." />
	<FormLabel>Password</FormLabel>
	<FormInput secureTextEntry placeholder="Password..." />

	<Button
	buttonStyle={{ marginTop: 20 }}
	backgroundColor="#03A9F4"
	title="SIGN IN"
	onPress={() => onSignIn()}
	/>
	</Card>
	</View>
);
