import React from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";
export class SignUp extends React.Component {
    render() {
        return (React.createElement(View, { style: { paddingVertical: 20 } },
            React.createElement(Card, null,
                React.createElement(FormLabel, null, "Email"),
                React.createElement(FormInput, { placeholder: "Email address..." }),
                React.createElement(FormLabel, null, "Password"),
                React.createElement(FormInput, { secureTextEntry: true, placeholder: "Password..." }),
                React.createElement(FormLabel, null, "Confirm Password"),
                React.createElement(FormInput, { secureTextEntry: true, placeholder: "Confirm Password..." }),
                React.createElement(Button, { buttonStyle: { marginTop: 20 }, backgroundColor: "#03A9F4", title: "SIGN UP", onPress: () => onSignIn() }),
                React.createElement(Button, { buttonStyle: { marginTop: 20 }, backgroundColor: "transparent", textStyle: { color: "#bcbec1" }, title: "Sign In", onPress: () => navigation.navigate("SignIn") }))));
    }
}
//# sourceMappingURL=SignUp.js.map