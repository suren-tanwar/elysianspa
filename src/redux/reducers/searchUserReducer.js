import {GET_USER_SEARCH} from "../actions/types"

const userSearchList = {

    userList:[]
    
}
function getUserSearch(state = userSearchList , action) {
    console.log(action);
    switch (action.type) {
       
            case GET_USER_SEARCH:
                return {
                    ...state,
                    userList : action.payload
                }
        default:
            return {
                ...state
            }
    }
}

export {getUserSearch}