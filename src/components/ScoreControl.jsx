
import React from 'react';

function ScoreControl( props ) {
	let newState = {};
	newState[ props.which ] = {
		score: props.state[ props.which ].score + 1
	}

	return (
	  <React.Fragment>
			<div className="team-name">
				{ props.state[ props.which ].team_name }
			</div>
			<div className="score">
				{ props.state[ props.which ].score }
				<button onClick={ () => props.setState( { ...newState, ...props.state } ) }>+1</button>
			</div>
			<div className="timeouts">
				{ props.state[ props.which ].timeouts }
			</div>
			<div className="jammer">
				{ props.state[ props.which ].jammer }
			</div>
	  </React.Fragment>
	);
}
	
export default ScoreControl;