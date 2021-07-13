import AsyncStorage from '@react-native-async-storage/async-storage';

require('./constants');

class Settings {
	// store a single value
	async getSession() {
		return await this.getItem('session');
	}
	async setSession(session) {
		return await this.setItem('session', session);
	}
	async removeSession() {
		return await this.removeItem('session');
	}
	// store an object
	async getData() {
		return JSON.parse(await this.getItem('data'));
	}
	async setData(data) {
		return await this.setItem('data', JSON.stringify(data));
	}
	async removeData() {
		return await this.removeItem('data');
	}
	// never call functions below directly
	async getItem(key) {
		try {
			let value = await AsyncStorage.getItem(key);
			return value;
		} catch {
			return null;
		}
	}
	async setItem(key, value) {
		try {
			await AsyncStorage.setItem(key, value);
			return true;
		} catch {
			return false;
		}
	}
	async removeItem(key) {
		try {
			await AsyncStorage.removeItem(key);
			return true;
		} catch {
			return false;
		}
	}
}

let settings = new Settings();
export default settings;
