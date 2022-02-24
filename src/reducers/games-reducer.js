import initialState from './initial-state';

const gamesReducer = (state = initialState.games, action) => {
    switch(action.type) {
        
        /** Add games to the state array */

        case 'ADD_GAME': {
            return {
                ...state,
                gameList: [...state.gameList, state.newGame]
            }
        }

        case 'REMOVE_GAME': {
            return {
                ...state,
                gameList: state.gameList.filter( game => game.name !== action.payload)
            }
        }

        case 'SORT_GAME': {
            return {
                ...state,
                gameList: [...state.gameList.sort((a,b) => {
                    if (a.name > b.name) return 1;
                    if (a.name == b.name) return 0;
                    if (a.name < b.name) return -1;
                })]
            }
        }

        case 'REVERSE_GAME': {
            return {
                ...state,
                gameList: state.gameList.reverse()
            }
        }

        /** Handle input for the game form. 
         *The payload (input changes) gets merged with the newGame object
         */

        case 'HANDLE_INPUT_CHANGE': {
            return {
                ...state, newGame: {
                    ...state.newGame, ...action.payload}
            }
        }

        case "REQUEST_GAMES":
			return {
				...state, isFetching: true
			}
		

		case "RECEIVE_GAMES": 
			return {
				...state, isFetching: false, gameList: action.payload
			}        

        case "FOUND_INDEX":
            return {
                ...state, foundIndex: action.payload
            }

        case "REPLACE_GAMES": {
            const {firstIndex, secondIndex } = action.payload;

            const arr = [...state.gameList];
            const firstElement = arr[firstIndex];
            const secondElement = arr[secondIndex];

            arr.splice(secondIndex, 1, firstElement);
            arr.splice(firstIndex, 1, secondElement);

            return {
                ...state, gameList: arr
            }
        }

        default: return state;
        
    }
};

export default gamesReducer;