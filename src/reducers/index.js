import {
    INCREMENT_COUNTER, 
    DECREMENT_COUNTER, 
    RESET_COUNTER
} from "../actiontypes";
import {combineReducers} from "redux";


const initionalState= {
    counter:1,
}

export function counterApp(state= initionalState, action) {
    switch(action.type) {
    case INCREMENT_COUNTER:
        return {
            counter: state.counter +1,
        };

        case DECREMENT_COUNTER:
            return {
                counter: state.counter -1,
            };

            case RESET_COUNTER:
                return {
                    counter: initionalState.counter,
        };
        default:
            return state;
                }
}

const rootReducer = combineReducers({counterApp});
export default rootReducer;