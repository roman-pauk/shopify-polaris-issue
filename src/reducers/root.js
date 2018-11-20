import * as acts from '../actions/list'

const initialState = {
    selectedItems: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case acts.ADD_ITEMS:
            return {
                selectedItems: action.payload
            }
        default:
            return state
    }
}
