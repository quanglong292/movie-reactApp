import {START_LOADING, STOP_LOADING } from "../constant/movie.const";
const inittialState = {
    loading: false,
}

const commonReducer = (state = inittialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case START_LOADING: return {
            ...state,
            loading: true
        }
        case STOP_LOADING: return {
            ...state,
            loading: false
        }
        default:
            return state;
    }
}

export default commonReducer;