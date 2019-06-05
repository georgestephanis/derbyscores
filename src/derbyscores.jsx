
import React from 'react';
import { render } from 'react-dom';
import NewWindow from 'react-new-window';

import './derbyscores.scss';

import Scoreboard from './components/Scoreboard';
import Dashboard from './components/Dashboard';

class DerbyScores extends React.Component {

	constructor() {
		super();

		this.state = {
			home: {
				team_name: "HomeTeam Name",
				score: 0,
				timeouts: 3,
				jammer: "HomeJammer Name",
				jammers: [],
			},
			away: {
				team_name: "AwayTeam Name",
				score: 0,
				timeouts: 3,
				jammer: "AwayJammer Name",
				jammers: [],
			},
			leadJammer: null, // null, 'home', or 'away'

			timesPeriod: {
				label: 1,
				time: ( 30 * 60 ),
			},
			timesJam: {
				label: 1,
				time: ( 2 * 60 ),
			},
		};

		this.setLeadJammer   = this.setLeadJammer.bind( this );
		this.startNextPeriod = this.startNextPeriod.bind( this );
		this.nextJam   = this.nextJam.bind( this );
		this.tick      = this.tick.bind( this );
		this.timeOut   = this.timeOut.bind( this );
		this.timeIn    = this.timeIn.bind( this );

		this.setState = this.setState.bind( this );
	}

	startNextPeriod() {
		let state = { ...this.state };

		state.timesPeriod.label++;
		state.timesPeriod.time = ( 30 * 60 );

		state.timesJam.label = 1;
		state.timesJam.time = ( 2 * 60 );
		state.leadJammer = null;

		this.setState( state );
	}

	nextJam() {
		let state = { ...this.state };

		state.timesJam.label++;
		state.timesJam.time = ( 2 * 60 );
		state.leadJammer = null;

		this.setState( state );
	}

	tick() {
		let state = { ...this.state };

		if ( state.timesPeriod.time > 0 ) {
			state.timesPeriod.time--;
		}
		if ( state.timesJam.time > 0 ) {
			state.timesJam.time--;

		}

		this.setState( state );
	}

	timeOut() {
		if ( this.intervalHandle ) {
			clearInterval( this.intervalHandle );
			this.intervalHandle = 0;
		}
	}

	timeIn() {
		if ( ! this.intervalHandle ) {
			this.intervalHandle = setInterval( this.tick, 1000 );
		}
	}

	setLeadJammer( which ) {
		console.log( which );
		let state = { ...this.state };

		if ( 'home' !== which && 'away' !== which ) {
			which = null;
		}

		state.leadJammer = which;

		this.setState( state );
	}

	render() {
		/*
		return (
			<Dashboard derbyScores={ this } setState={ this.setState } state={ this.state } />
		);
		/**/
		return (
			<React.Fragment>
				<Dashboard derbyScores={ this } setState={ this.setState.bind( this ) } state={ this.state } />
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
