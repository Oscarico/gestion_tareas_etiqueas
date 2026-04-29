export const initialState = {
    tareas: [],
    filter: ''
}

export const tareasReducer = ( state = initialState, action) => {

    if (action.type === 'add_tarea') {
        return {
            ...state,
            tareas: [
                ...state.tareas,
                action.payload
            ]
        }
    }

    if (action.type === 'remove_tarea') {
        return {
            ...state,
            tareas: state.tareas.filter( tarea => tarea.id !== action.payload )
        }
    }

    if (action.type === 'filter_by_label') {
        return {
            ...state,
            filter: action.payload
        }
    }

  return state
}
