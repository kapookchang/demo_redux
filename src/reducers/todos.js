import { CLICK } from '../actions/actionTypes'

const intialState = { isClick: false }
export default (state = intialState, action) => {
    switch(action.type) {
        case CLICK:
            return {
                ...state,
                isClick: true,
            }
        default: return state
    }
}