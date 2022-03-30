import { APP_SET_AUTH_USER } from './../../actions/app/appTypes';

const initialState = {
    authUser: '',
};

export const appReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case APP_SET_AUTH_USER:
            return {...state, authUser: payload.authUser };
        default:
            return state;
    }
};