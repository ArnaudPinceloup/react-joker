import { SET_ERROR, SET_LOADER } from "../../actions/app/ui/ui.actions"

import { FETCH_JOKE } from '../../actions/app/joke/joke.actions';

export const initState = {
    loading: {
        [FETCH_JOKE]: false
    }
}

export const uiReducer = (state = initState, action = {}) => {
    const { type, payload } = action

    switch(true){
        case type.includes(SET_LOADER):
            return {...state, loading: {...state.loading, [payload.entity]: payload.state}} 

        case type.includes(SET_ERROR):
            return {...state, error: {...state.error, [payload.entity]: payload.state}} 

        default:
            return state
    }
}