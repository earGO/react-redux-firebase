const initState={
    authError: null
}

export const authReducer = (state = initState,action) =>{
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login error')
            return {
                ...state,
                authError: action.payload
            };
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                authError:null,
            };
        case 'SIGN_OUT_SUCCESS':
            console.log('sign out success');
            return state;
        default:
            return state
    }
};