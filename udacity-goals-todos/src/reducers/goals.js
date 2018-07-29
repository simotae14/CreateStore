import {
    ADD_GOAL,
    REMOVE_GOAL
} from '../actions/goals';

// Reducer per i goal che sono obiettivi a lungo termine
export default function goals (state = [], action) {
    // creo uno switch
    switch(action.type) {
        case ADD_GOAL :
            return state.concat([action.goal]);
        case REMOVE_GOAL :
            // rimuovo il goal passato
            return state.filter((goal) => goal.id !== action.id);
        case RECEIVE_DATA :
            return action.goals
        default:
            return state;
    }
}