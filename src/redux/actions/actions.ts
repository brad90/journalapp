import * as actionTypes from '../constants';

export function updateCurrentLog(option: LogOption) {
	const action: LogOptionAction = {
		type: actionTypes.UPDATE_CURRENT_LOG,
		option,
	};

	return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: LogOptionAction) {
	return (dispatch: DispatchType) => {
		setTimeout(() => {
			dispatch(action);
		}, 500);
	};
}
