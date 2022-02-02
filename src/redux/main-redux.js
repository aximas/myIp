const SET_IP = 'SET_IP';


let initialState = {
    data: []
}


const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_IP: {
            return {
                ...state, data: [...action.myIp]
            }
        }
        default:
            return state;

    }
}

export const setIpAC = (myIp) => ({type: SET_IP, myIp});

export default mainReducer;