import React, {Component} from 'react';
import {StyleSheet, View, ActivityIndicator, BackHandler} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Settings from '../../settings';
import BaseScreen from './baseScreen';

export default class SplashScreen extends BaseScreen {
	constructor(props) {
		super(props);
		this.style = getStyleSheet(global.css);
	}
	redirect() {
		NetInfo.fetch().then((state) => {
			if(state.isConnected) {
				Settings.getSession().then((session) => {
					if(session) {
						this.goTo('Main');
					} else {
						this.goTo('SignIn');
					}
				});
			} else {
				this.goTo('NoConnection');
			}
		});
	}
	// functions below overrides base functions
	onBackPress() {
		BackHandler.exitApp();
	}
	componentDidMount() {
		// use super to call the base function
		// super.componentDidMount();
		this.redirect();
	}
	componentDidUpdate() {
		this.redirect();
	}
	render() {
		return (
			<View style={this.style.container}>
				<ActivityIndicator size='large' color={global.css.bodyIconColorInverted}/>
			</View>
		);
	}
}

function getStyleSheet(props) {
	return StyleSheet.create({
		container: {
			backgroundColor: props.bodyBackgroundColorInverted,
			alignItems: 'center',
			justifyContent: 'center',
			flex: 1,
			padding: 10
		}
	});
}
