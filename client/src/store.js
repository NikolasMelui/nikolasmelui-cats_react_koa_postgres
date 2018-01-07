import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Map } from 'immutable';
import { composeWithDevTools } from 'remote-redux-devtools';
import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs';

const fetchUserFulfilled = payload => ({
	type: 'FETCH_USER_FULFILLED',
	payload,
});
const fetchUserEpic = action$ =>
	action$
		.ofType('FETCH_USER')
		.mergeMap(action => ajax.getJSON(`/api/users/${action.payload}`).map(response => fetchUserFulfilled(response)));

const initialState = new Map({
	title: 'Cat',
	content: 'Beautiful cat!!!',
});

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LEARN MORE':
			return state.get('title') === 'Cat' ? state.set('title', 'Красавица кошка') : state.set('title', 'Cat');
		default:
			return state;
	}
};
const epicMiddleware = createEpicMiddleware(fetchUserEpic);
const enchanser = composeWithDevTools(applyMiddleware(epicMiddleware));
const store = createStore(reducer, initialState, enchanser);

export default store;
