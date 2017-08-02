'use strict'
// import React from 'react';
// import { Platform, StatusBar } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
// import { FontAwesome } from 'react-native-vector-icons';

import { SignUp } from './layout/SignUp';
import { SignIn } from './layout/SignIn';
import { Home } from './layout/Home';
import { Profile } from './layout/Profile';
import { NavigationActions } from 'react-navigation';

export class Router {
	private constructor() {
	}

	public static navigateToHome(dispatch: any): void {
		const resetAction = NavigationActions.reset({
			index: 0,
			actions: [
				NavigationActions.navigate({ routeName: 'Home' })
			]
		})
		dispatch(resetAction);
	}

	public static navigateToSingIn(dispatch): void {
		const backAction = NavigationActions.back({
			routeName: 'SignIn'
		})
		dispatch(backAction);
	}

	public static navigateToSignUp(navigate: any): void {
		navigate('SignUp', { name: 'SignUp' });
	}
};

const SignedIn = TabNavigator({
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

export const SignedOut = StackNavigator({
	SignIn: {
		screen: SignIn,
		navigationOptions: {
			title: 'Sign In'
		}
	},
	SignUp: {
		screen: SignUp,
		navigationOptions: {
			title: 'Sign Up'
		}
	},
	Home: {
		screen: SignedIn,
		navigationOptions: {
			title: 'Home'
		}
	}
});
