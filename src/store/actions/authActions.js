export const signIn = ( credentials ) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase(); //create firebase connection instance to communicate inside this action
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type:'LOGIN_SUCCESS'})
        }).catch(err=>{
            dispatch({type:'LOGIN_ERROR',payload:err})
        })
    }
};

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase(); //create firebase connection instance to communicate inside this action
        firebase.auth().signOut().then(()=>{
            dispatch({type:'SIGN_OUT_SUCCESS'})
        })
    }
};