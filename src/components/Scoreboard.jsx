
import React from 'react';

import Score from './Score';
import Clock from './Clock';

function Scoreboard( props ) {
	return (
		<React.Fragment>
		<section id="scores">
			<div id="home">
				<Score whichTeam="home" { ...props } />
			</div>
			<div id="away">
				<Score whichTeam="away" { ...props } />
			</div>
		</section>
	
		<section id="times">
			<div id="period">
				<Clock { ...props.timesPeriod } />
			</div>
			<div id="jam">
				<Clock { ...props.timesJam } />
			</div>
		</section>
		</React.Fragment>
	)
}
	
export default Scoreboard;