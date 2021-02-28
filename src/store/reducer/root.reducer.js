import {combineReducers} from "redux";
import movieReducer from "./movie.reducer";
import commonReducer from "./common.reducer";
const rootReducer = combineReducers({
    movie: movieReducer,    
    common: commonReducer,
});

export default rootReducer;