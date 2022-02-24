import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddGameForm from '../components/add-game-form.view.jsx';
import { addGame, handleInputChange, toggleGameForm } from '../actions/';
class AddGame extends Component {
	constructor(props) {
		super(props);
		
		this.showAddGameBox = this.showAddGameBox.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)

	}

	showAddGameBox() {
		const { onToggle }  = this.props;
		onToggle();
	}

	handleInputChange(event) {
		const target = event.target;
    	const value = target.value;
    	const name = target.name;
    	console.log(name);

   		const { onInputChange } = this.props;
		onInputChange(name,value); 
   	}

	handleSubmit(e) {
		e.preventDefault();
		
		if (this.props.newGame.name != '') {
			this.props.onToggle();
			this.props.onFormSubmit();
		}
	}
	renderForm() {
		return(
			<div className="">
				<AddGameForm onFormSubmit={this.handleSubmit} onInputChange={this.handleInputChange} />
 			</div>
 		)
	}
	render() {
		return(
			<div>
				
				{ this.props.isHidden === false ? this.renderForm(): <button  className="btn" style= {{ "marginLeft": "15px"}} type="submit" onClick={this.showAddGameBox} > Add Game </button>}
			</div>
			)
	}
}


// Описывает, как состояние отображается на экране
const mapStateToProps = (state) => {
    return {
        isHidden : state.ui.isAddGameFormHidden,
        newGame: state.games.newGame
    }
}

// Описывает, как действие отображается на экране
const mapDispatchToProps = (dispatch) => {
    return {
        onFormSubmit: (newGame) => {
            dispatch(addGame(newGame));
        },
        onInputChange: (name,value) => {
    
            dispatch(handleInputChange(name,value));
        },

        onToggle: () => {
        	dispatch(toggleGameForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddGame)