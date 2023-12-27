//a reducer takes in twp things:

//1. the action (info about what happened)
//2. a copy of current state

function postComments(state = [], action) {
    switch(action.type){
        case 'ADD_COMMENT':
            //return new state with the new comment
            console.log('adding a comment')
            return [...state, {
                user: action.author,
                text: action.comment
            }]
        case 'REMOVE_COMMENT':
            console.log('removing a comment')
            return [...state.slice(0,action.i),
                ...state.slice(action.i + 1)
            ]
        default:
            return state
    }
    return state
}

function comments(state = [], action){
    console.log('comments action running')
    console.log(state, action);
    if(typeof action.PostId !== 'undefined'){
         return [{
             ...state,
             [action.PostId]: postComments(state[action.PostId], action)
         }]
    }
    return state
}

export default comments;
