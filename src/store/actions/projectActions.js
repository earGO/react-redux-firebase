export const createProject = (project) => {
    return (dispatch,getState,{ getFirebase,getFirestore }) => {
        //get firestore reference to a constant
        const FIRESTORE = getFirestore();
        //get collection from firestore database and add new document to it
        FIRESTORE.collection('projects').add({
            ...project,
            authorFirstName:'Net',
            authorLastName:'Ninja',
            authorId:'31415',
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