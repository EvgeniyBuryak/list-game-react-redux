import React from 'react';

const GameCard = ({ game, onRemoveGame, onMove, isShowBtn }) => {

	return(

	  	<>
		  <a onClick={() => onMove(game.name)} >
	        <div className="">
	        
	            {game.icon_url !== undefined ?  <img src={game.icon_url} alt={game.name} className="img" /> :
	            						 <img src="img/profile_img.png" alt ={game.name} className="img" />}	        	
	        </div>
				<div className="">
					<span className="name">{game.name}</span><br/>
					
					{ isShowBtn == false ? <span>123</span> : <button className="" type="submit" onClick={() => onRemoveGame(game.name)}>Remove</button> }
					{/* <button className="" type="submit" onClick={() => onMove(game.name)}>Up</button> */}
					{/* <button className="" type="submit" onClick={() => onMove(game.name)}>Down</button> */}
				</div>			
	        <div className="clearfix"></div>
		  </a>
	    </>
        
    )
}

export default GameCard;