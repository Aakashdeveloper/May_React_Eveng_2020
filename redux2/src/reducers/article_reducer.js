export default function(state={}, action){
    switch(action.type){
        case 'GET_LATEST':
            return {...state,latestdata:action.payload}
        case 'GET_ARTICLE':
            return {...state,articledata:action.payload}
        default:
            return state
    }
}