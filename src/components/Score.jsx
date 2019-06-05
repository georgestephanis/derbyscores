
import React from 'react';

function Score( props ) {
	return (
	  <React.Fragment>
			<div className="team-name">
				{ props[ props.whichTeam ].team_name }
			</div>
			<div className="score">
				{ props[ props.whichTeam ].score }
			</div>
			<div className="timeouts">
				{ props[ props.whichTeam ].timeouts }
			</div>
			<div className={ 'jammer' + ( props.leadJammer === props.whichTeam ? ' lead' : '' ) }>
				{ props[ props.whichTeam ].jammer }
			</div>
	  </React.Fragment>
	);
}
	
export default Score;