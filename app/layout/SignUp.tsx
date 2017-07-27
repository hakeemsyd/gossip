import React from 'react';
import { View } from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';
import { onSignIn } from '../auth';

interface SignUpProps {
	navigation?: any; // Question mark indicates prop is optional
}

export class SignUp extends React.Component<SignUpProps, null> {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={{ paddingVertical: 20 }}>
				<Card>
					<FormLabel>Email</FormLabel>
					<FormInput placeholder='Email address...' />
					<FormLabel>Password</FormLabel>
					<FormInput secureTextEntry placeholder='Password...' />

					<FormLabel>Confirm Password</FormLabel>
					<FormInput secureTextEntry placeholder='Confirm Password...' />

					<Button
						buttonStyle={{ marginTop: 20 }}
						backgroundColor='#03A9F4'
						title='SIGN UP'
						onPress={() => onSignIn()}
					/>
					<Button
						buttonStyle={{ marginTop: 20 }}
						backgroundColor='transparent'
						textStyle={{ color: '#bcbec1' }}
						title='Sign In'
						onPress={() => navigate('SignIn')}
					/>
				</Card>
			</View>
		)
	}
}