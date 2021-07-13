import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './assets/screens/splashScreen';
import SignInScreen from './assets/screens/signInScreen';
import MainScreen from './assets/screens/mainScreen';
import NoConnectionScreen from './assets/screens/noConnectionScreen';

let Navigator = () => {
	const Stack = createStackNavigator();
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Splash' headerMode='none'>
				<Stack.Screen name='Splash' component={SplashScreen}/>
				<Stack.Screen name='SignIn' component={SignInScreen}/>
				<Stack.Screen name='Main' component={MainScreen}/>
				<Stack.Screen name='NoConnection' component={NoConnectionScreen}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Navigator;
