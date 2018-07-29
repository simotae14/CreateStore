import { ADD_TODO } from '../actions/todos';

// creo una funzione che intercetta una action prima che il dispatch raggiunga il reducer
// creo il MIDDLEWARE
const checker = (store) => (next) => (action) => {
    if (
        action.type === ADD_TODO &&
        action.todo.name.toLowerCase().includes('bitcoin')
    ) {
        return alert('Nope. That\'s a bad idea.');
    }

    if (
        action.type === ADD_GOAL &&
        action.goal.name.toLowerCase().includes('bitcoin')
    ) {
        return alert('Nope. That\'s a bad idea.');
    }

    return next(action);
}

export default checker;