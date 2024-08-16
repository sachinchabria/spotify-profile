// Map for localStorage keys
const LOCALSTORAGE_KEYS = {
	accessToken: 'spotify_access_token',
	refreshToken: 'spotify_refresh_token',
	expireTime: 'spotify_token_expire_time',
	timestamp: 'spotify_token_timestamp',
}
  
// Map to retrieve localStorage values
const LOCALSTORAGE_VALUES = {
	accessToken: window.localStorage.getItem(LOCALSTORAGE_KEYS.accessToken),
	refreshToken: window.localStorage.getItem(LOCALSTORAGE_KEYS.refreshToken),
	expireTime: window.localStorage.getItem(LOCALSTORAGE_KEYS.expireTime),
	timestamp: window.localStorage.getItem(LOCALSTORAGE_KEYS.timestamp),
};

const getAccessToken = () => {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const accessToken = urlParams.get('access_token');
	return accessToken;
};

export const accessToken = getAccessToken();
