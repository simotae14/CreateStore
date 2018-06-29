function createStore (reducer) {
    // Lo store deve avere 4 parti
    // 1. lo state
    // 2. Get dello state.
    // 3. stare in ascolto dei cambiamenti nello state
    // 4. aggiornare lo state

    // 1. creo lo state, che conterrà le info dello state della mia app
    let state

    // creo un array di listeners, ovvero di cose che stanno in ascolto
    let listeners = []

    // 2. recupero lo state App
    const getState = () => state

    // creo la funzione subscribe che si occuperà di reagire al cambiamento state
    const subscribe = (listener) => {
        listeners.push(listener);
        // rimuovo dall'ascolto il listener passato in chiamata
        return () => {
            listeners = listeners.filter((l) => l !== listener)
        }
    }

    // creo il dispatch che si occupa di aggiornare lo state
    const dispatch = (action) => {
        state = reducer(state, action);
        // invoco tutti i listeners
        listeners.forEach((listener) => listener());
    }

    // restituisco un oggetto in cui ci sia una pty per recuperare lo state
    // una per stare in ascolto dei cambiamenti dello state
    return {
        getState,
        subscribe,
        dispatch
    }
}

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';

function addTodoAction (todo) {
    return {
        type: ADD_TODO,
        todo
    }
}

function removeTodoAction (id) {
    return {
        type: REMOVE_TODO,
        id
    }
}

function toggleTodoAction (id) {
    return {
        type: TOGGLE_TODO,
        id
    }
}

function addGoalAction (goal) {
    return {
        type: ADD_GOAL,
        goal
    }
}

function removeGoalAction (goal) {
    return {
        type: REMOVE_GOAL,
        id
    }
}

/*
App Code
*/
// Reducer per i todo
function todos (state = [], action) {
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
        default:
            return state;
    }
}

// Reducer per i goal che sono obiettivi a lungo termine
function goals (state = [], action) {
    // creo uno switch
    switch(action.type) {
        case ADD_GOAL :
            return state.concat([action.goal]);
        case REMOVE_GOAL :
            // rimuovo il goal passato
            return state.filter((goal) => goal.id !== action.id);
        default:
            return state;
    }
}

// Reducer root per il recupero dei vari state
function app (state = {}, action) {
    return {
        todos: todos(state.todos, action),
        goals: goals(state.goals, action)
    };
}

// creo lo store passandogli lo Specifico Reducer
const store = createStore(app);

// invoco i 3 metodi disponibile dello store
store.subscribe(() => {
    console.log('The new state is: ', store.getState());
})

// invoco il dispatch per aggiornare lo state dello store
store.dispatch(addTodoAction({
    id: 0,
    name: 'Walk the dog',
    complete: false
}))

store.dispatch(addTodoAction({
    id: 1,
    name: 'Wash the car',
    complete: false
}))

store.dispatch(addTodoAction({
    id: 2,
    name: 'Go to the gym',
    complete: true
}))

store.dispatch(removeTodoAction(1));

store.dispatch(toggleTodoAction(0));

store.dispatch(addGoalAction({
    id: 0,
    name: 'Learn Redux'
}));

store.dispatch(addGoalAction({
    id: 1,
    name: 'Lose 20 pounds'
}));

store.dispatch(removeGoalAction(0));
