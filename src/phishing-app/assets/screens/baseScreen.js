import React, {Component} from 'react';
import {BackHandler} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Settings from '../../settings';

export default class BaseScreen extends Component {
	constructor(props) {
		super(props);
		BackHandler.addEventListener('hardwareBackPress', this.onHardwareBackPress);
		this.subscription = null;
	}
	goTo(routeName, params = {}) {
		this.props.navigation.navigate(routeName, params);
	}
	onBackPress() {
		this.goTo('Main');
	}
	// arrow function below will crate a new instance on every call
	onHardwareBackPress = () => {
		this.onBackPress();
		return true;
	}
	handleConnectivityChange = (state) => {
		if(!state.isConnected && this.props.route.name != 'NoConnection') {
			this.goTo('NoConnection');
		} else if (this.props.route.name == 'NoConnection' && state.isConnected) {
			this.goTo('Splash');
		}
	}
	componentDidMount() {
		this.subscription = NetInfo.addEventListener(this.handleConnectivityChange);
	}
	componentWillUnmount() {
		this.subscription && this.subscription();
	}
	logOut() {
		Settings.removeSession();
		Settings.removeData();
		this.goTo('SignIn');
	}
}
