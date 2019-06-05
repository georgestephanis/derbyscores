
import React from 'react';

import ScoreControl from './ScoreControl';
import ClockControl from './ClockControl';

class Dashboard extends React.Component {

	constructor() {
		super();
	}

	render() {
		return (
			<React.Fragment>
				<h1>Dashboard</h1>
				<button onClick={ this.props.derbyScores.timeIn }>
					Time In!
				</button>
				<button onClick={ this.props.derbyScores.timeOut }>
					Time Out!
				</button>
				<button onClick={ this.props.derbyScores.nextJam }>
					Next Jam
				</button>
				<button onClick={ this.props.derbyScores.startNextPeriod }>
					Next Period
				</button>
				<section id="scores">
					<div id="home">
						<ScoreControl whichTeam="scoresHome" { ...this.props } />
					</div>
					<div id="away">
						<ScoreControl whichTeam="scoresAway" { ...this.props } />
					</div>
				</section>

				<section id="times">
					<div id="period">
						<ClockControl which="timesPeriod" { ...this.props } />
					</div>
					<div id="jam">
						<ClockControl which="timesJam" { ...this.props } />
					</div>
				</section>
			</React.Fragment>
		)
  }
}

export default Dashboard;