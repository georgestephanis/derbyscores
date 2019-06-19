
import React from 'react';

function JamControl( props ) {
	const jam = props.state.timesJam,
		min = Math.floor( jam.time / 60 ),
		sec = jam.time % 60;

	return (
		<React.Fragment>
			<div className="label">
				{ jam.label }
			</div>
			<div className="time">
				{ min + ':' + sec.toString(10).padStart(2,'0') }
			</div>
		</React.Fragment>
	);
}

export default JamControl;