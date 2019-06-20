
import React from 'react';

function JamControl( props ) {
	const jam = props.state.jam,
		min = Math.floor( jam.time / 60 ),
		sec = jam.time % 60;

	return (
		<React.Fragment>
			<div className="label">
				{ jam.label }
			</div>
			<div className={ "home jam-score" + ( 'home' === props.state.leadJammer ? ' lead' : '' ) }>
				{ jam.home }
			</div>
			<div className="time">
				{ min + ':' + sec.toString(10).padStart(2,'0') }
			</div>
			<div className={ "away jam-score" + ( 'away' === props.state.leadJammer ? ' lead' : '' ) }>
				{ jam.away }
			</div>
		</React.Fragment>
	);
}

export default JamControl;