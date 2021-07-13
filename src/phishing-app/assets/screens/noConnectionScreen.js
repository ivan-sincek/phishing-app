import React, {Component} from 'react';
import {StyleSheet, View, Text, BackHandler} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import BaseScreen from './baseScreen';

export default class NoConnectionScreen extends BaseScreen {
	constructor(props) {
		super(props);
		this.style = getStyleSheet(global.css);
	}
	onBackPress() {
		BackHandler.exitApp();
	}
	render() {
		return (
			<View style={this.style.container}>
				<Icon style={this.style.icon} name='disconnect'/>
				<Text style={this.style.text}>{global.msg.noConnection}</Text>
			</View>
		);
	}
}

function getStyleSheet(props) {
	return StyleSheet.create({
		container: {
			backgroundColor: props.bodyBackgroundColor,
			alignItems: 'center',
			justifyContent: 'center',
			flex: 1,
			padding: 10
		},
		icon: {
			color: props.bodyIconColor,
			fontSize: 30
		},
		text: {
			marginTop: 20,
			color: props.bodyTextColor,
			fontSize: 20,
			textAlign: 'center'
		}
	});
}
