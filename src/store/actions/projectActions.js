export const createProject = (project) => {
    return (dispatch,getState,{ getFirebase,getFirestore }) => {
        //get firestore reference to a constant
        const FIRESTORE = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        //get collection from firestore database and add new document to it
        FIRESTORE.collection('projects').add({
            ...project,
            authorFirstName:profile.firstName,
            authorLastName:profile.lastName,
            authorId:authorId,
            createdAt:new Date()
        }).then(()=>{
            dispatch({
                type:'CREATE_PROJECT',
                payload:project
            })
        }).catch(err=>{
            dispatch({
                type:'CREATE_PROJECT_ERROR',
                payload:err
            })
        })

    }
};