import Settings from '../../settings';

export default class BaseRequest {
	async fetch(path, options) {
		if (!options.headers) {
			options.headers = {};
		};
		// append default headers
		options.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, max-age=0';
		options.headers['Accept'] = 'application/json';
		options.headers['Content-Type'] = 'application/json';
		if(options.body) {
			// serialize body
			options.body = JSON.stringify(options.body);
		}
		let response = await fetch(global.settings.api + path, options);
		return response;
	}
	async postRaw(path, options) {
		options.method = 'POST';
		let response = await this.fetch(path, options);
		return response;
	}
	async post(path, options) {
		let raw = await this.postRaw(path, options);
		let response = await raw.json();
		return response;
	}
	async getRaw(path, options) {
		options.method = 'GET';
		let response = await this.fetch(path, options);
		return response;
	}
	async get(path, options) {
		let raw = await this.getRaw(path, options);
		let response = await raw.json();
		return response;
	}
}
