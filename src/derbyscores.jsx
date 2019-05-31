
import React from 'react';
import { render } from "react-dom";
import NewWindow from 'react-new-window';

import './derbyscores.scss';

import Scoreboard from './components/Scoreboard';
import Dashboard from './components/Dashboard';

class DerbyScores extends React.Component {

	constructor() {
		super();

    this.state = {
      scoresHome: {
        team_name: "Home Team",
        score: 33,
        timeouts: 2,
        jammer: "LadyJelly",
      },
      scoresAway: {
        team_name: "Away Team",
        score: 44,
        timeouts: 1,
        jammer: "AwayJamBerry",
      },
      timesPeriod: {
        label: 1,
        time: 210,
      },
      timesJam: {
        label: 7,
        time: 67,
      },
    };

    this.tick = this.tick.bind( this );

    this.intervalHandle = setInterval( this.tick, 1000 );
	}

  tick() {
    let state = { ...this.state }

    if ( state.timesPeriod.time > 0 ) {
      state.timesPeriod.time--;
    }
    if ( state.timesJam.time > 0 ) {
      state.timesJam.time--;

    }

    this.setState( state );
  }

  render() {
    return (
      <React.Fragment>
        <Dashboard setState={ this.setState } state={ this.state } />
        <NewWindow name="ScoreboardWindow" >
          <Scoreboard { ...this.state } />
        </NewWindow>
      </React.Fragment>
    )
  }
}

render(
  <DerbyScores />,
  document.getElementById('root')
);
