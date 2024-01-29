import React from 'react';

const Trending = () => {
    // Component logic goes here
  
    return (
      <div>
        <iframe src="https://sleeper.app/embed/players/nfl/trending/add?lookback_hours=24&limit=25" width="350" height="500" allowtransparency="true" frameborder="0"></iframe>
      </div>
    );
};

export default Trending;