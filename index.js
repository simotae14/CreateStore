/*
Function to create the store
*/
function createStore () {
    // The store should have foru parts
    // 1. The state
    // 2. Get the state.
    // 3. Listen to changes on the state
    // 4. Update the state

    // 1. creo lo state
    let state

    // creo un array di listeners
    let listeners = []

    // 2. recupero lo state App
    const getState = () => state

    // creo la funzione subscribe
    const subscribe = (listener) => {
        listeners.push(listener);
    }

    // restituisco un oggetto in cui ci sia una pty per recuperare lo state
    return {
        getState,
        subscribe
    }
}

// CREIAMO LO STORE
const store = createStore()

// stare in ascolto dei cambiamenti dello store
const store = createStore()

// il subscribe viene invocato + volte
// la prima
store.subscribe(() => {
    console.log('The new state is: ', store.getState());
})

// le successive
store.subscribe(() => {
    console.log('The store changed.');
})