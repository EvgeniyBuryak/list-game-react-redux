const initialState = {
	games: {
		gameList: [],
		newGame: {
				name: '',
				icon_url: ''
		},
		isFetching: false,
		searchText: 'a',
		foundIndex: -1,
	},

	ui: {
    //   All the UI related state here. eg: hide/show modals,
    //   toggle checkbox etc.
			isAddGameFormHidden: true,
			isPosChangeStyleHidden: true
		}
}

export default initialState;