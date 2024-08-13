import { legacy_createStore as createStore } from 'redux'

const CHANGE_INPUT = 'CHANGE_INPUT'

const changeInput = ({ name, value }) => {
	return {
		type: CHANGE_INPUT,
		payload: {
			name,
			value,
		},
	}
}

const initialState = {
	name: '',
	email: '',
}
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_INPUT: {
			return {
				...state,
				[action.payload.name]: action.payload.value,
			}
		}
		default:
			return state
	}
}

const store = createStore(reducer)

export default store

export { changeInput }
