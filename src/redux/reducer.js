import data from '../assets/data'

const initialState = {
    data: data,
    correct: 0,
    incorrect: 0,
    submitted: false,
    clear:false
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_ANSWER':
            return {
                ...state,
                clear:false,
                data: action.payload
            }
        case 'SUBMIT':
            return {
                ...state,
                clear:false,
                submitted: true,
                correct:action.payload.correct,
                incorrect:action.payload.incorrect
            }
        case 'CLEAR':
            return {
                ...initialState,
                clear:true
            }
        default:
            return state;
    }

}

export default reducer;