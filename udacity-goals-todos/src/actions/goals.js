import API from 'goals-todos-api';

export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

// action creators
function addGoal (goal) {
    return {
        type: ADD_GOAL,
        goal
    }
}

function removeGoal (id) {
    return {
        type: REMOVE_GOAL,
        id
    }
}

// async action creators
// action creator per Aggiungere un Goal
export function handleAddGoal (name, callback) {
    return (dispatch) => {
        return API.saveGoal(name)
            .then((goal) => {
                dispatch(addGoal(goal));
                callback();
            })
            .catch(() => alert('There was an error. Try again.'));
    }
}

// action creator per Rimuovere un goal
export function handleDeleteGoal (goal) {
    return (dispatch) => {
        dispatch(removeGoal(goal.id));

        return API.deleteGoal(goal.id)
            .catch(() => {
                dispatch(addGoal(goal));
                alert('An error occured. Try again.');
            })
    }
}

