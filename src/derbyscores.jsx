
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
			period: {
				label: 1,
				time: ( 30 * 60 ),
			},
			jam: {
				label: 1,
				time: ( 2 * 60 ),
				home: 0, // Number of points Home banked this jam
				away: 0, // Number of points Away banked this jam
			},

			leadJammer: null, // null, 'home', or 'away'
			log: [],
		};

		this.setLeadJammer   = this.setLeadJammer.bind( this );
		this.startNextPeriod = this.startNextPeriod.bind( this );
		this.nextJam   = this.nextJam.bind( this );
		this.tick      = this.tick.bind( this );
		this.timeOut   = this.timeOut.bind( this );
		this.timeIn    = this.timeIn.bind( this );
		this.score     = this.score.bind( this );
		this.timeouts  = this.timeouts.bind( this );
		this.logJam    = this.logJam.bind( this );
		this.log       = this.log.bind( this );
		this.onkeydown = this.onkeydown.bind( this );

		this.setState = this.setState.bind( this );

		document.onkeydown = this.onkeydown;
	}

	onkeydown( e ) {
		e = e || window.event;
		switch ( e.keyCode ) {
			case 37:
				this.score( 'home', 1 );
				return false;
			case 39:
				this.score( 'away', 1 );
				return false;
			case 40:
				this.nextJam();
				return false;
		}
	}

	startNextPeriod() {
		this.logJam();
		const state = { ...this.state };

		state.period.label++;
		state.period.time = ( 30 * 60 );

		state.jam.label = 1;
		state.jam.time = ( 2 * 60 );
		state.jam.home = 0;
		state.jam.away = 0;
		state.leadJammer = null;

		this.setState( state );
	}

	nextJam() {
		this.logJam();
		const state = { ...this.state };

		state.jam.label++;
		state.jam.time = ( 2 * 60 );
		state.jam.home = 0;
		state.jam.away = 0;
		state.leadJammer = null;

		this.setState( state );
	}

	tick() {
		const state = { ...this.state };

		if ( state.period.time > 0 ) {
			state.period.time--;
		}
		if ( state.jam.time > 0 ) {
			state.jam.time--;

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
		const state = { ...this.state };

		if ( 'home' !== which && 'away' !== which ) {
			which = null;
		}

		state.leadJammer = which;

		this.setState( state );
	}

	score( which, change ) {
		if ( 'home' !== which && 'away' !== which ) {
			return;
		}
		if ( 'number' !== typeof change ) {
			return;
		}
		const state = { ...this.state };

		// If this is the first point of the jam,
		if ( state.jam.home === 0 && state.jam.away === 0 ) {
			state.leadJammer = which;
		}

		state[ which ].score += change;
		state.jam[ which ] += change;

		this.setState( state );
	}

	timeouts( which, change ) {
		if ( 'home' !== which && 'away' !== which ) {
			return;
		}
		if ( 'number' !== typeof change ) {
			return;
		}
		const state = { ...this.state };

		state[ which ].timeouts += change;

		this.setState( state );
	}

	logJam() {
		const state = this.state,
			jam = state.jam;

		this.log( 'Period ' + state.period.label + ' Jam ' + jam.label +
			' ended @ ' + jam.time + 's => home +' + jam.home + ' away +' + jam.away +
			' <= ' + state[ state.leadJammer ].jammer + ' (' + state[ state.leadJammer ].team_name + ') was lead jammer.' );
	}

	log( msg ) {
		const state = { ...this.state };
		state.log.push( msg );
		this.setState( state );
	}

	render() {
		/* */
		return (
			<Dashboard { ...this } />
		);
		/**/
		return (
			<React.Fragment>
				<Dashboard { ...this } />
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
