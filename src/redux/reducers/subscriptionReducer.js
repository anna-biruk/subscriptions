import {GET_SUBSCRIPTIONS_ITEMS} from "../actions/types";

const initialState = {
    items: [],

}

export const subscriptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SUBSCRIPTIONS_ITEMS:
            return {...state, ...action.payload}

        default:
            return state
    }
}

export default subscriptionReducer