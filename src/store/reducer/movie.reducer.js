import { GET_MOVIE_LIST, GET_MOVIE_SUCCESS, GET_MOVIE_FAILED, GET_MOVIE_DETAIL_SUCCESS, GET_MOVIE_DETAIL_FAILED, USER_LIST_SUCCESS, USER_LIST_FAILED} from "../constant/movie.const";
const inittialState = {
    movieList: [],
    movieDetail: {},
    userList: [],
    errors: [],

}

const movieReducer = (state = inittialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_MOVIE_SUCCESS: {
            state.movieList = payload;
            return {...state};
        }
        case GET_MOVIE_FAILED: {
            state.errors = payload;
            return {...state};
        }

        // GET DETAIL
        case GET_MOVIE_DETAIL_SUCCESS: {
            return {...state, movieDetail: payload};
        }
        case GET_MOVIE_DETAIL_FAILED: {
            return {...state, errors: payload};
        }

        // GET USERLIST
        case USER_LIST_SUCCESS: {
            return {...state, userList: payload};
        }
        case USER_LIST_FAILED: {
            return {...state, errors: payload};
        }

        default:
            return state;
    }
}

export default movieReducer;