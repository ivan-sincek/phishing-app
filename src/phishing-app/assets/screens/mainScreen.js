import React, {Component} from 'react';
import {StyleSheet, View, Text, BackHandler} from 'react-native';
import BaseScreen from './baseScreen';
import ActionBar from '../components/actionBar';

export default class MainScreen extends BaseScreen {
	constructor(props) {
		super(props);
		this.style = getStyleSheet(global.css);
		this.logOut = this.logOut.bind(this);
	}
	onBackPress() {
		BackHandler.exitApp();
	}
	render() {
		return (
			<View style={this.style.container}>
				<ActionBar
					background={global.css.navigationBackgroundColor}
					color={global.css.navigationIconColor}
					type='right'
					icon='sign-out'
					onPress={this.logOut}
				/>
				<View style={this.style.content}>
					<Text style={this.style.text}>{global.msg.welcome}</Text>
				</View>
			</View>
		);
	}
}

function getStyleSheet(props) {
	return StyleSheet.create({
		container: {
			backgroundColor: props.bodyBackgroundColor,
			flex: 1
		},
		content: {
			alignItems: 'center',
			justifyContent: 'center',
			flex: 1,
			padding: 10
		},
		text: {
			color: props.bodyTextColor,
			fontSize: 20,
			textAlign: 'center'
		}
	});
}
