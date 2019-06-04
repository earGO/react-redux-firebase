const initState={
    authError: null
}

export const authReducer = (state = initState,action) =>{
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: action.payload
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError:null,
            };
        case 'SIGN_OUT_SUCCESS':
            return state;
        case 'SIGN_UP_SUCCESS':
            return {
                ...state,
                authError:null
            };
        case 'SIGN_UP_ERROR':
            return {
                ...state,
                authError:action.payload.message
            };
        default:
            return state
    }
};