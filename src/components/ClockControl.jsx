
import React from 'react';

function ClockControl( props ) {
	let min = Math.floor( props.state[ props.which ].time / 60 ),
	sec = props.state[ props.which ].time % 60;
	return (
		<React.Fragment>
			<div className="label">
				{ props.state[ props.which ].label }
			</div>
			<div className="time">
				{ min + ':' + sec.toString(10).padStart(2,'0') }
			</div>
		</React.Fragment>
	);
}

export default ClockControl;