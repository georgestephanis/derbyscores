
import React from 'react';

function Score( props ) {
	return (
	  <React.Fragment>
			<div className="team-name">
				{ props.team_name }
			</div>
			<div className="score">
				{ props.score }
			</div>
			<div className="timeouts">
				{ props.timeouts }
			</div>
			<div className="jammer">
				{ props.jammer }
			</div>
	  </React.Fragment>
	);
}
	
export default Score;