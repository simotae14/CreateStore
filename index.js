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

// CREIAMO LO STORE, crei istanze dello store
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