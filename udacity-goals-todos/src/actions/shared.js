import API from 'goals-todos-api';

export const RECEIVE_DATA = 'RECEIVE_DATA';

// action creator per aggiungere allo store i dati iniziali recuperati per goals e todos
function receiveData (todos, goals) {
    return {
        type: RECEIVE_DATA,
        todos,
        goals
    }
}

// async action creator
// action creator per Caricare i dati Iniziali
export function handleInitialData () {
    return (dispatch) => {
        // recupero i dati dalla API
        Promise.all([
            API.fetchTodos(),
            API.fetchGoals()
        ]).then(([ todos, goals ])=> {
            // dispatcho l'action receiveData
            dispatch(receiveData(todos, goals));
        })
    }
}

