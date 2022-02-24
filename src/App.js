import React from "react";

import Games from './containers/games.jsx'

const App = () => {
    return (
        <div className="wrapper">
            <div className="App">
                <div className="col-sm-7 offset-sm-2">
                    <span className="title">Games</span>
                    <Games />
                </div>
            </div>
        </div>
    );
}

export default App;