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

export const signUp = (newUser) => {
  return  (dispatch, getState, { getFirebase,getFirestore }) => {
      const firebase = getFirebase(); //create firebase connection instance to communicate inside this action
      const firestore = getFirestore(); //create firebase connection instance to communicate inside this action
      firebase.auth().createUserWithEmailAndPassword(
          newUser.email,
          newUser.password
      ).then((response)=>{
          return firestore.collection('users').doc(response.user.uid).set({ //create a document in a collection with a specific ID
              firstName:newUser.firstName,
              lastName:newUser.lastName,
              initials:newUser.firstName[0] + newUser.lastName[0]
          }).then(()=>{
              dispatch({type:'SIGN_UP_SUCCESS'})
          }).catch(err=>{
              dispatch({ type:'SIGN_UP_FAILED',payload: err})
          })
      })
  }
};