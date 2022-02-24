import initialState from './initial-state';

const uiReducer = (state = initialState.ui, action) => {
    switch(action.type) {
      
        /** Show/hide the form */
      
        case 'TOGGLE_GAME_FORM': {
            return {
                ...state, isAddGameFormHidden: !state.isAddGameFormHidden
            }
        }

        case 'TOGGLE_GAME_POS': {
            return {
                ...state, isPosChangeStyleHidden: !state.isPosChangeStyleHidden
            }
        }
        
        default: return state;
      }  
}

export default uiReducer;