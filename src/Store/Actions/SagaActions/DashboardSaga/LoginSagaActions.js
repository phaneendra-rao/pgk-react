export const actionLoginRequestSaga = (request) => {
	return {
		type: 'LOGIN-REQUEST',
		payload: request
	};
};
