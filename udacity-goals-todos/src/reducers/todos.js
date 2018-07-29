import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO
} from '../actions/todos';

import {
    RECEIVE_DATA
} from '../actions/shared';

// Reducer per i todo
export default function todos (state = [], action) {
    // creo uno switch
    switch(action.type) {
        case ADD_TODO :
            return state.concat([action.todo]);
        case REMOVE_TODO :
            // rimuovo il todo passato
            return state.filter((todo) => todo.id !== action.id);
        case TOGGLE_TODO :
            // modifico il valore del complete per il dato todo
            return state.map((todo) => todo.id !== action.id ? todo :
                Object.assign({}, todo, { complete: !todo.complete }));
        case RECEIVE_DATA :
            return action.todos
        default:
            return state;
    }
}
