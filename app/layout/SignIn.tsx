import React from 'react';
import { View } from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';
import { onSignIn } from '../auth';
interface Props {
	navigation?: any; // Question mark indicates prop is optional
}

interface State {
	username: string;
	password: string;
}
export class SignIn extends React.Component<Props, State> {

	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
	}

	render() {
		return (
			<View style={{ paddingVertical: 20 }}>
				<Card title='SIGN IN'>
					<FormLabel>Email</FormLabel>
					<FormInput placeholder='Email address...'
						onChangeText={(text) => this.setState({ username: text })}>
					</FormInput>
					<FormLabel>Password</FormLabel>
					<FormInput secureTextEntry placeholder='Password...'
						onChangeText={(text) => this.setState({ password: text })}>
					</FormInput>

					<Button
						buttonStyle={{ marginTop: 20 }}
						backgroundColor='#03A9F4'
						title='SIGN IN'
						onPress={() => onSignIn(this.state.username, this.state.password)}
					/>
				</Card>
			</View>
		)
	}
}
