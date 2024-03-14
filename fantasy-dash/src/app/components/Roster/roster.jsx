import React from 'react';
import PlayerCard from './player-card';
import './roster.css';

const Roster = () => {  
    const statuses = ['Healthy', 'Questionable', 'Out', 'Healthy','Healthy', 'Questionable', 'Out', 'Healthy','Healthy', 'Questionable', 'Out', 'Healthy','Questionable', 'Out', 'Healthy','Healthy'];
    const players = ['Ceedee lamb', 'Patrick Mahomes', 'Josh Allen', 'Clyde Edwards Solarie Mahomes','Patrick Mahomes', 'Patrick Mahomes', 'Patrick Mahomes', 'Patrick Mahomes','Patrick Mahomes', 'Patrick Mahomes', 'Patrick Mahomes', 'Patrick Mahomes','Patrick Mahomes', 'Patrick Mahomes', 'Patrick Mahomes', 'Patrick Mahomes'];

    return (
      <div className='roster-container'>
        {players.map((_, index) => (
            <PlayerCard key={index} playerName={players[index]} status={statuses[index]}></PlayerCard>
        ))}
      </div>
    );
};

export default Roster;