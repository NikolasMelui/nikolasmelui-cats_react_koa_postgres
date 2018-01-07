import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Map } from 'immutable';
import { composeWithDevTools } from 'remote-redux-devtools';
import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs';

const learnMoreFulfilled = payload => ({
	type: 'LEARN MORE FULFILLED',
	payload,
});
const learnMoreEpic = action$ =>
	action$
		.ofType('LEARN MORE')
		.mergeMap(action => ajax.getJSON(`/learn`).map(response => learnMoreFulfilled(response)));

const initialState = new Map({
	title: 'Тёмка!!!',
	content: 'Самая красивая кошка в мире! Никого нет красивее! ЛЮБЛЮНИМАГУ!!!',
	image: 'Temka.jpg',
});

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LEARN MORE FULFILLED':
			return state
				.set('title', action.payload.title)
				.set('content', action.payload.content)
				.set('image', action.payload.image);
		default:
			return state;
	}
};
const epicMiddleware = createEpicMiddleware(learnMoreEpic);
const enchanser = composeWithDevTools(applyMiddleware(epicMiddleware));
const store = createStore(reducer, initialState, enchanser);

export default store;
