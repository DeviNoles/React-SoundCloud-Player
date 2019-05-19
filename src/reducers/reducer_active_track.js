import {TRACK_SELECTED} from '../constants/constants'


export default function (state={}, action) {
    switch (action.type){
        case TRACK_SELECTED :
        console.log('ACTION PAYLOAD: ' + action.payload)
            return {
                ...state,
                ...action.payload
            };
        default :
            return state;
    }
}
