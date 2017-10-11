import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Text } from 'react-native';
import { Button } from 'native-base';

class ProfileBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'User Name',
            firstName: 'First Name',
            lastName: 'Last Name',
            phoneNumber: 'Phone',
            emailAddress: 'Email'
        };
    }

    render() {
        return (
            <View style={{flex: 8}}>
                <View style={{flex: 2}}>
                    <View style={{flex:8}}>
                    <Text>User Name</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({userName: text})}
                        value={this.state.userName}
                    />
                    </View>
                    <View style={{flex:8}}>
                    <Text>First Name</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({firstName: text})}
                        value={this.state.firstName}
                    />
                    </View>
                    <View style={{flex:8}}>
                    <Text>Last Name</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({lastName: text})}
                        value={this.state.lastName}
                    />
                    </View>
                    <View style={{flex:8}}>
                    <Text>Phone Number</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1, keyboardType: "number-pad" }}
                        onChangeText={(text) => this.setState({phoneNumber: text})}
                        value={this.state.phoneNumber}
                    />
                    </View>
                    <View style={{flex:8}}>
                    <Text>Email</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1, keyboardType: "number-pad" }}
                        onChangeText={(text) => this.setState({phoneNumber: text})}
                        value={this.state.emailAddress}
                    />
                    </View>
                </View>
                <Button full success>
                    <Text>Save Info</Text>
                </Button>
            </View>
        );
    }
}

export default ProfileBody;