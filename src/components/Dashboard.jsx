
import React from 'react';

import Score from './Score';
import Clock from './Clock';

class Dashboard extends React.Component {

	constructor() {
		super();
	}

	render() {
		return (
			<React.Fragment>
				<h1>Dashboard</h1>
				<section id="scores">
					<div id="home">
						<Score { ...this.props.scoresHome } />
					</div>
					<div id="away">
						<Score { ...this.props.scoresAway } />
					</div>
				</section>

				<section id="times">
					<div id="period">
						<Clock { ...this.props.timesPeriod } />
					</div>
					<div id="jam">
						<Clock { ...this.props.timesJam } />
					</div>
				</section>
			</React.Fragment>
		)
  }
}

export default Dashboard;