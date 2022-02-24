import React, { useCallback } from 'react';
import GameCard from './game-card.view.jsx';

const GameList = (props) => {

  const renderItem = useCallback( game => {
    return (
      <li key={game.name}
          className="list-group__item">    
          <GameCard game={game} onRemoveGame={props.onRemoveGame} onMove={props.onMove} isShowBtn={props.showBtn}/>
      </li>)
  }, [props.gameList]);

	return (
    <ul className="list-group" id="contact-list">      
      { props.gameList.map(renderItem) }
    </ul>
  )
}

export default GameList;