global.settings = {
	// change the API address as necessary
	api: 'http://192.168.8.5'
};

// logo
global.logo = {
	name: 'logo.png',
	directory: '/img/'
};
global.logo.uri = global.settings.api + global.logo.directory + global.logo.name;

// add more CSS customizations to your liking
global.css = {
	// general
	bodyBackgroundColor: '#FEFEFE',
	bodyIconColor: '#5B96A9',
	bodyTextColor: '#808080',
	// navigation bar
	navigationBackgroundColor: '#5B96A9',
	navigationIconColor: '#FEFEFE',
	// sign in page
	formLogoHeight: 160,
	formInputColor: '#808080',
	formInputIconColor: '#5B96A9',
	formInputBorderColor: '#808080',
	formErrorColor: '#5B96A9',
	formSubmitBackgroundColor: '#5B96A9',
	formSubmitIconColor: '#FEFEFE',
	// splash page
	bodyBackgroundColorInverted: '#5B96A9',
	bodyIconColorInverted: '#FEFEFE'
};

global.msg = {
	// change the welcome message to your liking
	welcome: 'Application is under construction.',
	noConnection: 'No internet connection!'
};

global.input = {};
// input placeholders
global.input.placeholder = {
	email: 'Email',
	password: 'Password'
}
// input error messages
global.input.message = {
	email: 'Please enter email',
	password: 'Please enter password',
	global: 'Host unreachable'
}
