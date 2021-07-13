import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, Keyboard, BackHandler} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserRequest from '../network/userRequest';
import BaseScreen from './baseScreen';

export default class SignInScreen extends BaseScreen {
	constructor(props) {
		super(props);
		this.style = getStyleSheet(global.css);
		this.state = {
			email: '',
			emailMessage: '',
			password: '',
			passwordMessage: '',
			global: ''
		};
		// binding a function in the constructor improves performance
		// this will create only one instance of given function and use that instance all the time
		this.signIn = this.signIn.bind(this);
	}
	verify() {
		let error = false;
		if(this.state.email.length < 1) {
			this.setState({emailMessage: global.input.message.email});
			error = true;
		} else if(this.state.emailMessage) {
			this.setState({emailMessage: ''});
		}
		if(this.state.password.length < 1) {
			this.setState({passwordMessage: global.input.message.password});
			error = true;
		} else if(this.state.passwordMessage) {
			this.setState({passwordMessage: ''});
		}
		if(this.state.global.length > 0) {
			this.setState({global: ''});
		}
		return error;
	}
	signIn() {
		Keyboard.dismiss();
		if(!this.verify()) {
			UserRequest.signIn(this.state.email, this.state.password).then((response) => {
				if(response.status) {
					this.goTo('Main');
				} else {
					if(response.message.email) {
						this.setState({emailMessage: response.message.email});
					}
					if(response.message.password) {
						this.setState({passwordMessage: response.message.password});
					}
					if(response.message.global) {
						this.setState({global: response.message.global});
					}
				}
			// arrow function below will crate a new instance on every call
			}).catch(() => this.setState({global: global.input.message.global}));
		}
	}
	onBackPress() {
		BackHandler.exitApp();
	}
	render() {
		return (
			<View style={this.style.container}>
				<Image
					style={this.style.logo}
					resizeMode='contain'
					// source={require('../../img/logo.png')}
					// you cannot pass a variable to the function above
					// but you can pass a variable to the function below
					source={{uri: global.logo.uri}}
				/>
				<Input
					leftIcon={<Icon style={this.style.inputIcon} name='user-circle'/>}
					leftIconContainerStyle={this.style.inputIconContainer}
					containerStyle={this.style.input}
					inputContainerStyle={this.style.inputContainer}
					inputStyle={this.style.inputText}
					autoComplete='off'
					autoCapitalize='none'
					autoCorrect={false}
					spellCheck={false}
					maxLength={300}
					placeholder={global.input.placeholder.email}
					onChangeText={(email) => this.setState({email})}
					errorStyle={this.style.error}
					errorMessage={this.state.emailMessage}
					textContentType='emailAddress'
				/>
				<Input
					leftIcon={<Icon style={this.style.inputIcon} name='lock'/>}
					leftIconContainerStyle={this.style.inputIconContainer}
					containerStyle={this.style.input}
					inputContainerStyle={this.style.inputContainer}
					inputStyle={this.style.inputText}
					autoComplete='off'
					autoCapitalize='none'
					autoCorrect={false}
					spellCheck={false}
					maxLength={300}
					placeholder={global.input.placeholder.password}
					onChangeText={(password) => this.setState({password})}
					errorStyle={this.style.error}
					errorMessage={this.state.passwordMessage}
					textContentType='password'
					secureTextEntry={true}
				/>
				<Button
					icon={<Icon style={this.style.submitIcon} name='sign-in'/>}
					containerStyle={{flexDirection: 'row'}}
					buttonStyle={this.style.submit}
					onPress={this.signIn}
				/>
				<View style={{width: '100%'}}>
					<Text style={this.style.global}>{this.state.global}</Text>
				</View>
			</View>
		);
	}
}

function getStyleSheet(props) {
	return StyleSheet.create({
		container: {
			backgroundColor: props.bodyBackgroundColor,
			alignItems: 'center',
			flex: 1,
			paddingVertical: 60,
			paddingHorizontal: 20
		},
		logo: {
			marginBottom: 60,
			height: props.formLogoHeight,
			width: '100%'
		},
		inputIcon: {
			color: props.formInputIconColor,
			fontSize: 30
		},
		inputIconContainer: {
			marginLeft: 14,
			alignItems: 'center',
			width: 34
		},
		input: {
		},
		inputContainer: {
			borderColor: props.formInputBorderColor
		},
		inputText: {
			marginHorizontal: 9,
			color: props.formInputColor,
			fontSize: 20
		},
		error: {
			color: props.formErrorColor,
			fontSize: 14
		},
		submit: {
			backgroundColor: props.formSubmitBackgroundColor,
			flex: 1,
			padding: 10,
			borderRadius: 20
		},
		submitIcon: {
			color: props.formSubmitIconColor,
			fontSize: 30
		},
		global: {
			marginTop: 5.5,
			marginHorizontal: 15.5,
			color: props.formErrorColor,
			fontSize: 14
		}
	});
}
