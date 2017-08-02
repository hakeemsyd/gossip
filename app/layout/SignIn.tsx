import React from 'react';
import { View } from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';
import { SignInStore } from '../stores/SignInStore';
import { observer } from 'mobx-react';

interface Props {
	navigation?: any; // Question mark indicates prop is optional
}

interface State {
	username: string;
	password: string;
}

@observer
export class SignIn extends React.Component<Props, State> {
	private store: SignInStore;

	constructor(props) {
		super(props);
		this.store = new SignInStore();
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={{ paddingVertical: 20 }}>
				<Card title='SIGN IN'>
					<FormLabel>Email</FormLabel>
					<FormInput placeholder='Email address...'
						keyboardType='email-address'
						onChangeText={(text) => this.store.setUsername(text)}>
					</FormInput>
					<FormLabel>Password</FormLabel>
					<FormInput secureTextEntry placeholder='Password...'
						onChangeText={(text) => this.store.setPassword(text)}>
					</FormInput>

					<Button
						buttonStyle={{ marginTop: 20 }}
						backgroundColor='#03A9F4'
						title='SIGN IN'
						disabled={this.store.isBusy}
						onPress={() => this.store.login(this.props.navigation.dispatch)}
					/>
					<Button
						buttonStyle={{ marginTop: 20 }}
						backgroundColor='transparent'
						textStyle={{ color: '#bcbec1' }}
						title='Create a new Account?'
						disabled={this.store.isBusy}
						onPress={() => navigate('SignUp', { name: 'SignUp' })}
					/>
				</Card>
			</View>
		)
	}
}
