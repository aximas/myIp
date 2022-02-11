const SET_IP = 'SET_IP';
const GET_FULL = 'GET_FULL';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    data: [],
    isFetching: false
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
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        default:
            return state;

    }
}

export const setMyIp = (myIp) => ({type: SET_IP, myIp});
export const getFullData = (fullData) => ({type: GET_FULL, fullData});
export const isToggleFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default mainReducer;