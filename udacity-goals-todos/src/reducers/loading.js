import {
    RECEIVE_DATA
} from '../actions/shared';

export default function loading (state = true, action) {
    // creo lo switch
    switch(action.type) {
        case RECEIVE_DATA :
            return false;
        default:
            return state;
    }
}
