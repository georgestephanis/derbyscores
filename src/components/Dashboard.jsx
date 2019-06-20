
import React from 'react';

import ScoreControl from './ScoreControl';
import ClockControl from './ClockControl';
import JamControl from './JamControl';
import Log from './Log';

class Dashboard extends React.Component {

	constructor() {
		super();
	}

	render() {
		return (
			<React.Fragment>
				<button onClick={ this.props.timeIn }>
					Time In!
				</button>
				<button onClick={ this.props.timeOut }>
					Time Out!
				</button>
				<button onClick={ this.props.nextJam }>
					Next Jam
				</button>
				<button onClick={ this.props.startNextPeriod }>
					Next Period
				</button>

				<section id="scores">
					<div id="home">
						<ScoreControl whichTeam="home" { ...this.props } />
					</div>
					<div id="away">
						<ScoreControl whichTeam="away" { ...this.props } />
					</div>
				</section>

				<section id="times">
					<div id="period">
						<ClockControl which="period" { ...this.props } />
					</div>
					<div id="jam">
						<JamControl { ...this.props } />
					</div>
				</section>

				<footer>
					Keyboard Navigation: <kbd>&larr;</kbd>: Home Score <kbd>&rarr;</kbd>: Away Score <kbd>&darr;</kbd>: Next Jam
				</footer>

				<Log log={ this.props.state.log } />
			</React.Fragment>
		)
  }
}

export default Dashboard;