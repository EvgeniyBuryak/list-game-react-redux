import React, { Component } from 'react';
import {  bindActionCreators } from 'redux';
import {  connect } from 'react-redux'; 
import '../../public/assets/scss/main.scss'
import AddContact from './add-contact.jsx'
import GameList from '../components/game-list.view.jsx';
import {  replaceGames, 
          fetchGames, 
          removeGame, 
          sortGame, 
          reverseGame, 
          toggleGamePos, 
          foundIndex, 
          handlePickTheGame, 
          showResult } from '../actions';
class Game extends Component {

  constructor(props) {
    super(props);
    this.state              = { pairSelectedIndex: [] };
    this.returnGameList     = this.returnGameList.bind(this);
    this.handleRemoveGame   = this.handleRemoveGame.bind(this);
    this.onSortGame         = this.onSortGame.bind(this);
    this.onReverseGame      = this.onReverseGame.bind(this);    
    this.onTogglePos        = this.onTogglePos.bind(this);
    this.findIndexByName    = this.findIndexByName.bind(this);
    this.handleGameByName   = this.handleGameByName.bind(this);
    // this.handleToggleSwap   = this.handleToggleSwap.bind(this);
  }

  returnGameList() {
    const { gameList } = this.props;

    return gameList;
  }
  
  handleRemoveGame(value) {
    const { removeGame }    = this.props.actions;

    removeGame(value)
  }
  
  // Sort Ascending
  onSortGame() {
    const { sortGame }      = this.props.actions;

    sortGame();
  }

  // Sort Descending
  onReverseGame() {
    const { reverseGame }   = this.props.actions;

    reverseGame();
  }

  onTogglePos() {
    const { toggleGamePos } = this.props.actions;

    toggleGamePos();
  }

  // loading list of games
  componentDidMount() {        
    const { fetchGames }    = this.props.actions;

    fetchGames();        
  }

  componentWillUnmount() {
    // освободить gameList от значений
  }

  findIndexByName(name) {
    const { gameList }                                  = this.props;

    return gameList.findIndex( game => game.name == name);
  }

  handleGameByName (gameName) {
    const { isHidden }                                  = this.props;
    const { foundIndex, replaceGames, toggleGamePos }   = this.props.actions;
    const index                                         = this.findIndexByName(gameName);
    
    // if the SWAP button is pressed
    if (isHidden === false) {
      foundIndex(index); // keep the previous index

      // two games to choose from
      if (this.state.pairSelectedIndex.length < 2) {

        // keep the previous array of elements and the new array of elements
        const newArr                                    = [...this.state.pairSelectedIndex, index];
        
        this.setState({ pairSelectedIndex: newArr }, () => {
          
          if (newArr.length == 2) {

            replaceGames(...newArr);
            
            // refresh button and array index
            toggleGamePos();
            
            this.setState({ pairSelectedIndex: [] });
          }
        });
      } else {
        console.log("Никогда не выведет в консоль!")
        this.setState({ pairSelectedIndex: [] });
      }

    }
  }
  
  renderSwapGame() {
    const { foundIndex } = this.props;
    
    if (foundIndex >= 0) {
      const arr = document.querySelectorAll('li');
      
      // arr[foundIndex].style.background = 'blue';      
      // arr[foundIndex].style.padding = '15px';

      arr[foundIndex].style.outline = '2px solid #709376';
    }

    return (
      <>
        <span>Select two games whose positions you want to swap between them</span>
        <br />
        <button className         = "btn btn--secondary" 
                type              = "submit" 
                onClick           = {this.onTogglePos}     > Cancel          </button>
      </>
    );
  }

  render() {
    // console.log(this.props.gameList);
    return (
    	<div className              = "navigation">
          { this.props.isHidden === false ? this.renderSwapGame() : 
          <>
          <button   className     = "btn btn--secondary" 
                    style         = {{ "marginLeft": "15px"}} 
                    type          = "submit" 
                    onClick       = {this.onTogglePos}     > SWAP            </button>
          <AddContact/>
          <button   className     = "btn btn--secondary" 
                    style         = {{ "marginLeft": "15px"}} 
                    type          = "submit" 
                    onClick       = {this.onSortGame}      > Sort Ascending  </button>
          <button   className     = "btn btn--secondary" 
                    style         = {{ "marginLeft": "15px"}} 
                    type          = "submit" 
                    onClick       = {this.onReverseGame}   > Sort Descending </button>
          </>}
         	<br />                    
          <GameList gameList      = {this.returnGameList()} 
                    onRemoveGame  = {this.handleRemoveGame} 
                    onMove        = {this.handleGameByName} 
                    showBtn       = {this.props.isHidden}/>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gameList                      : state.games.gameList,
    searchText                    : state.games.searchText,
    isFetching                    : state.games.isFetching,
    isHidden                      : state.ui.isPosChangeStyleHidden,
    foundIndex                    : state.games.foundIndex,
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
      {
        fetchGames,
        removeGame,
        sortGame,
        reverseGame,
        toggleGamePos,
        foundIndex,
        handlePickTheGame,
        showResult,
        replaceGames
      },
      dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps) (Game);