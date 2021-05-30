export const actionLoginRequestSaga = (request) => {
	return {
		type: 'LOGIN-REQUEST',
		payload: request
	};
};

export const actionLogoutRequestSaga = () => {
	return {
		type: 'LOGOUT-REQUEST'
	};
};
