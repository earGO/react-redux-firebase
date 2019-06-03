const initState={
    projects:[
        {id:'1',title:'help me find peaches', content:'Lorem ipsum dolor sit amet, consectetur adipisicin'},
        {id:'2',title:'collect all the stars', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, voluptatem.'},
        {id:'3',title:'egg hunt with yoshi', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum iure laborum possimus quis! Ipsa?'},
        {id:'4',title:'squash all turtles', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eos est possimus quaerat quam repellendus.'}
    ]
};

export const projectReducer = (state = initState,action) =>{
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project',action.payload)
    }
    return state
};