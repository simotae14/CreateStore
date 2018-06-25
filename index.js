/*
Pure function per modificare lo state in base ad una action
*/
function todos (state = [], action) {
    // controllo il tipo di azione occorsa
    if (action.type === 'ADD_TODO') {
        return state.concat([action.todo]);
    }

    return state;
}
/*
Funzione per creare lo store
*/
function createStore () {
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
        state = todos(state, action);
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

// CREIAMO LO STORE, crei istanze dello store
// stare in ascolto dei cambiamenti dello store
const store = createStore()

// il subscribe viene invocato + volte
// ogni volta che lo store cambia lo state
// la prima
store.subscribe(() => {
    console.log('The new state is: ', store.getState());
})

// le successive
// tolgo dall'ascolto
const unsuscribe = store.subscribe(() => {
    console.log('The store changed.');
})