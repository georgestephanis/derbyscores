
import React from 'react';

import IncrementButton from './IncrementButton';

function ScoreControl( props ) {
	const state = { ...props.state };
	return (
	  <React.Fragment>
			<div className="team-name">
				{ state[ props.whichTeam ].team_name }
			</div>
			<div className="score">
				<IncrementButton type="-" whichProperty="score" { ...props } />
				{ state[ props.whichTeam ].score }
				<IncrementButton type="+" whichProperty="score" { ...props } />
			</div>
			<div className="timeouts">
				<IncrementButton type="-" whichProperty="timeouts" { ...props } />
				{ state[ props.whichTeam ].timeouts }
				<IncrementButton type="+" whichProperty="timeouts" { ...props } />
			</div>
			<div className="jammer">
				{ state[ props.whichTeam ].jammer }
			</div>
	  </React.Fragment>
	);
}
	
export default ScoreControl;