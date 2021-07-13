import DeviceInfo from 'react-native-device-info';
import Settings from '../../settings';
import BaseRequest from './baseRequest';

class UserRequest extends BaseRequest {
	// function that is waiting for some other asynchronous function to finish also needs to be asynchronous
	async signIn(email, password) {
		let path = '/user/sign_in.php';
		let options = {
			// data to be sent to the server
			body: {
				email: email,
				password: password,
				// asynchronous function for fetching the network interface MAC address
				mac: await DeviceInfo.getMacAddress().then((mac) => {return mac}),
				os: DeviceInfo.getSystemName(),
				version: DeviceInfo.getSystemVersion()
			}
		};
		// both path and options are mandatory
		// options can be an empty object
		return this.post(path, options).then((response) => {
			// server response
			if(response.status.toLowerCase() == 'ok') {
				Settings.setSession(response.session);
				Settings.setData(response.data);
				response.status = true;
			} else {
				// error
				response.status = false;
			}
			return response;
		});
	}
}

let userRequest = new UserRequest();
export default userRequest;
