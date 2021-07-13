import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ActionBar extends Component {
	constructor(props) {
		super(props);
		// passing props into the stylesheet
		this.style = getStyleSheet(this.props);
	}
	render() {
		let actionBar = null;
		if(this.props.type.toLowerCase() == 'both') {
			actionBar = (
				// array of styles
				<View style={[this.style.container, {justifyContent: 'space-between'}]}>
					<TouchableOpacity style={this.style.wrapper} onPress={this.props.onPressLeft}>
						<Icon style={this.style.icon} name={this.props.iconLeft}/>
					</TouchableOpacity>
					<TouchableOpacity style={this.style.wrapper} onPress={this.props.onPressRight}>
						<Icon style={this.style.icon} name={this.props.iconRight}/>
					</TouchableOpacity>
				</View>
			);
		} else if(this.props.type.toLowerCase() == 'left') {
			actionBar = (
				<View style={[this.style.container, {justifyContent: 'flex-start'}]}>
					<TouchableOpacity style={this.style.wrapper} onPress={this.props.onPress}>
						<Icon style={this.style.icon} name={this.props.icon}/>
					</TouchableOpacity>
				</View>
			);
		} else if(this.props.type.toLowerCase() == 'right') {
			actionBar = (
				<View style={[this.style.container, {justifyContent: 'flex-end'}]}>
					<TouchableOpacity style={this.style.wrapper} onPress={this.props.onPress}>
						<Icon style={this.style.icon} name={this.props.icon}/>
					</TouchableOpacity>
				</View>
			);
		}
		return (actionBar);
	}
}

function getStyleSheet(props) {
	return StyleSheet.create({
		container: {
			backgroundColor: props.background,
			flexDirection: 'row',
			alignItems: 'center',
			paddingVertical: 8,
			paddingHorizontal: 10
		},
		wrapper: {
			alignItems: 'center',
			justifyContent: 'center',
			height: 24,
			width: 24
		},
		icon: {
			color: props.color,
			fontSize: 24
		}
	});
}
