'using strict'
// import React from 'react';
// import { Platform, StatusBar } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
// import { FontAwesome } from 'react-native-vector-icons';

import { SignUp } from './layout/SignUp';
import { SignIn } from './layout/SignIn';
import { Home } from './layout/Home';
import { Profile } from './layout/Profile';

export const SignedOut = StackNavigator({
	SignUp: {
		screen: SignUp,
		navigationOptions: {
			title: 'Sign Up'
		}
	},
	SignIn: {
		screen: SignIn,
		navigationOptions: {
			title: 'Sign In'
		}
	}
});

export const SignedIn = TabNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			tabBarLabel: 'Home'/*,
			tabBarIcon: ({ tintColor }) => (
				<FontAwesome name='home' size={30} color={tintColor} />
			)*/
		}
	},
	Profile: {
		screen: Profile,
		navigationOptions: {
			tabBarLabel: 'Profile'/*,
			tabBarIcon: ({ tintColor }) => (
				<FontAwesome name='user' size={30} color={tintColor} />
			)*/
		}
	}
});
