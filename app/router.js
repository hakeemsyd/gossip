import { StackNavigator } from "react-navigation";

import SignUp from "./layout/SignUp";
import SignIn from "./layout/SignIn";

export const SignedOut = StackNavigator({
	SignUp: {
		screen: SignUp,
		navigationOptions: {
			title: "Sign Up"
		}
	},
	SignIn: {
		screen: SignIn,
		navigationOptions: {
			title: "Sign In"
		}
	}
});
