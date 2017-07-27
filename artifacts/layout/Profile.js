import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, Button, Text } from 'react-native-elements';
import { onSignOut } from '../auth';
export class Profile extends Component {
    render() {
        return (React.createElement(View, { style: { paddingVertical: 20 } },
            React.createElement(Card, { title: 'John Doe' },
                React.createElement(View, { style: {
                        backgroundColor: '#bcbec1',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        alignSelf: 'center',
                        marginBottom: 20
                    } },
                    React.createElement(Text, { style: { color: 'white', fontSize: 28 } }, "JD")),
                React.createElement(Button, { backgroundColor: '#03A9F4', title: 'SIGN OUT', onPress: () => onSignOut() }))));
    }
}
//# sourceMappingURL=Profile.js.map