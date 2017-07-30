import React from 'react';
import { View } from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';
import { onSignIn, onSignUp } from '../auth';

interface Props {
	navigation: any;
}

interface State {
	username: string;
	password: string;
	repassword: string;
}
export class SignUp extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			username: "hakeemsyd@gmai.com",
			password: "",
			repassword: ""
		};
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={{ paddingVertical: 20 }}>
				<Card>
					<FormLabel>Email</FormLabel>
					<FormInput placeholder='Email address...'
						onChangeText={(text) => this.setState({ username: text })}>
					</FormInput>
					<FormLabel>Password</FormLabel>
					<FormInput secureTextEntry placeholder='Password...'
						onChangeText={(text) => this.setState({ password: text })}>
					</FormInput>
					<FormLabel>Confirm Password</FormLabel>
					<FormInput secureTextEntry placeholder='Confirm Password...'
						onChangeText={(text) => this.setState({ repassword: text })}>
					</FormInput>

					<Button
						buttonStyle={{ marginTop: 20 }}
						backgroundColor='#03A9F4'
						title='SIGN UP'
						onPress={() => onSignUp(this.state.username, this.state.password,
							this.state.repassword)}
					/>
					<Button
						buttonStyle={{ marginTop: 20 }}
						backgroundColor='transparent'
						textStyle={{ color: '#bcbec1' }}
						title='Sign In'
						onPress={() => navigate('SignIn', { name: 'SignIn' })}
					/>
				</Card>
			</View>
		)
	}
}