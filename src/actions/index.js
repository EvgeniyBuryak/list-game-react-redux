// import axios from 'axios';
import { getGameList } from '../api/springstech.api';

export const addGame = () => (dispatch) => {
	dispatch({ type: "ADD_GAME"})
}

export const removeGame = (value) => (dispatch) => {
	dispatch({ type: "REMOVE_GAME", payload: value})
}

export const sortGame = () => (dispatch) => {
	dispatch({ type: "SORT_GAME"})
}

export const reverseGame = () => (dispatch) => {
	dispatch(sortGame());
	dispatch({ type: "REVERSE_GAME" });
}

export const handleInputChange = (name, value) => (dispatch) => {
	dispatch({ type: "HANDLE_INPUT_CHANGE", payload: { [name]: value}})
}

export const toggleGameForm = () => (dispatch) => {
	dispatch({ type: "TOGGLE_GAME_FORM"})
}

export const toggleGamePos = () => (dispatch) => {
	dispatch({ type: "TOGGLE_GAME_POS"})
}

export const requestGames = () => (dispatch) => {
	dispatch({ type: "REQUEST_GAMES", payload: true})
}

export const receiveGames = (data) => (dispatch) => {
	dispatch({ type: "RECEIVE_GAMES", payload: data})
}

export const receiveGamesError = (err) => (dispatch) => {
	dispatch({type: "ERROR", payload: err})
}

export const fetchGames = () => async (dispatch) => {
	dispatch(requestGames());
	try {
		const result = await getGameList();

		dispatch(receiveGames(result.data));
	}
	catch (err) {
		dispatch(receiveGamesError(err));
	}
}

export const foundIndex = (index) => (dispatch) => {
	dispatch({type: "FOUND_INDEX", payload: index})
}

export const showResult = (value) => (dispatch) => {
	dispatch({type: "SHOW_RESULT", payload: value})
}

export const replaceGames = (firstIndex, secondIndex) => (dispatch) => {	
	dispatch({ type: "REPLACE_GAMES", payload: { firstIndex, secondIndex } })
}

// actions below are not used
export const searchGames = (searchText) => (dispatch) => {
	dispatch(handleSearchInput(searchText));
	dispatch({type: "SEARCH_GAMES"})
}

export const handleSearchInput = (searchText) => (dispatch) => {
	dispatch({type: "HANDLE_SEARCH_INPUT", payload: searchText})
}

export const handlePickTheGame = () => {

}

// export const handlePickTheGame = async (count) => (dispatch, getState) => {
// 		try {
// 			const { countGame, foundIndex } = getState().games;
			
// 			const arr = document.querySelectorAll('a');
// 			// const prevIndex = -2;
// 			// let clickMouse = 0;
// 			// let secondArg = () => [{name: 'error'}];
// 			// dispatch(showResult('Начало'));
			
// 			if (foundIndex >= 0)
// 				arr[1].addEventListener('click', () => {
// 					dispatch(showResult('addEventListener'));
// 				});

// 			const funSecArg = new Promise( (resolve, reject) => {   // (*)
// 				const { gameList } = getState().games;
// 				// const newGameList = [];
// 				// if (isFetching === false) {
				
// 				// dispatch(showResult(arr[1]));
// 				// if (gameIndex != prevIndex && gameIndex >= 0) {
// 				if (count == 1) {
// 					dispatch(clickCountGame(2));
// 					dispatch(showResult('Внутри первого промиса'));

// 					// send array	
// 					const firstArg = arraySwitch(gameList);   // (*)
							
// 					// send first index
// 					const secondArg = firstArg(foundIndex);   // (*)

// 					resolve(secondArg);   // (*)

// 					// // send second index
// 					// const newGameList = secondArg(secondIndex);

// 					// console.log(`first: ${firstIndex} second: ${secondIndex}`);

// 					// resolve(newGameList);
// 					// save response
// 					// prevIndex = gameIndex;
					
					
// 					// const newGameList = arraySwitch(array)(firstIndex)(secondIndex);
					
// 					// если первый индекс норм
// 					// const first = gameIndex > -1 ? gameIndex : null;
// 					// ищем второй индекс
// 					// const second = gameIndex > -1 ? gameIndex : null;
// 					// resolve(gameIndex);
// 					// const result = this.f(first)(second);
// 					// break;
// 					// if (gameIndex > -1)
// 					// resolve(secondArg(3));
// 				}
// 				// так как не выбран второй индекс, то не сработает
// 				// if (gameIndex != prevIndex && prevIndex >= 0) {

// 				// if (clickCountGame == 2) {
// 				// 	// send second index
// 				// 	const newGameList = secondArg(foundIndex)

// 				// 	resolve(newGameList);
// 				// }

// 			});			
			
// 			const newIndex = await new Promise( (resolve, reject) => {   // (*)
// 				// const { foundIndex, gameList, isFetching } = getState().games;

// 				dispatch(showResult('Зашел во второй промис перед count'));

// 				if (count == 3) {
// 					dispatch(clickCountGame(4));
// 					dispatch(showResult('Внутри второго промиса'));
// 					// send second index

// 					// const newGameList = await funSecArg(foundIndex);   // (*)

// 					resolve(foundIndex);   // (*)
// 				}
// 			});			

// 			const result = await funSecArg(newIndex);

// 			if (count == 4) {

// 				dispatch(onSwitchGames(result));   // (*)
// 				dispatch(clickCountGame(0));
// 			}

// 		} catch (err) {
// 			dispatch(receiveGamesError(`actions: handlePickTheGame - ${err}`));
// 		}
	
// }