import {SAVE_NEW_SEARCH} from '../constants/constants'

let LS = localStorage.getItem("searches");
if(LS){
    LS = LS.split(',');
} else {
    localStorage.setItem("searches", '');
    LS = localStorage.getItem("searches");
}


export default function (state=LS, action) {
    switch (action.type){
        case SAVE_NEW_SEARCH :
            return [
                ...action.payload
            ];
        default :
            return state;
    }
}
