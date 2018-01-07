import { createStore } from 'redux';
import { Map } from 'immutable';
import { composeWithDevTools } from 'remote-redux-devtools';

const initialState = new Map({
	title: 'Cat',
	content: 'Beautiful cat!!!',
});

const reducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

const store = createStore(reducer, initialState, composeWithDevTools({ realtime: true })());

export default store;
