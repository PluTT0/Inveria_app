import { loadState } from "../../helpers";
import { constans } from "../constans";



const initialState = loadState() || {
};

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case constans.SET_ADMIN_LOGIN:
            return {
                ...state,
            }
        default: 
        return state
    };
};

export default loginReducer;