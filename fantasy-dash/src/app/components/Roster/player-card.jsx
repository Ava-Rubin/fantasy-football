import React from 'react';
import './roster.css';

const PlayerCard = ({playerName, status}) => {  
    const playerCardClass = {
        'Questionable': 'player-card bg-yellow-player border-yellow-player',
        'Healthy': 'player-card bg-white border-white',
        'Out': 'player-card bg-red-player border-red-player',
    };

    const colorMapping = {
        'Questionable': 'yellow-player',
        'Healthy': 'white',
        'Out': 'red-player',
    };
    
    return (
      <div className={playerCardClass[status]}>
        <div className={`bg-transparent justify-center flex items-center h-full w-10 mr-2 border-[1px] border-${colorMapping[status]} rounded-lg`}>Q</div>
        <div className='w-1/3 text-ellipsis'>{playerName}</div>
        
        <div className={`bg-transparent justify-center flex items-center h-6 w-12 ml-4 mr-2 border-[1px] border-${colorMapping[status]} rounded-xl`}>10.0</div>
      </div>
   
    );
};

export default PlayerCard;