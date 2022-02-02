const SET_IP = 'SET_IP';
const GET_FULL = 'GET_FULL';

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
        case GET_FULL: {
            return {
                ...state, data: [...action.fullData]
            }
        }
        default:
            return state;

    }
}

export const setIpAC = (myIp) => ({type: SET_IP, myIp});
export const getFullAC = (fullData) => ({type: GET_FULL, fullData})

export default mainReducer;