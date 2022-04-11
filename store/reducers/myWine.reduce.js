import { ADD_WINE } from '../actions/myWine.action';
import MyWine from '../../models/MyWineClass';

const initialState = {
    myWines: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_WINE:
            const myWine = new MyWine(
                Date.now(),
                action.payload.title,
                action.payload.image,
                action.payload.detail,
            )
            return {
                ...state,
                myWines: state.myWines.concat(myWine),
            }
        // case LOAD_WINES:
        //     return {
        //         ...state,
        //         myWines: action.myWines,
        //     }
        default:
            return state
    } 
}