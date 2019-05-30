
function Clock( props ) {
	let min = Math.floor( props.time / 60 ),
	sec = props.time % 60;
	return (
		<React.Fragment>
			<div className="label">
				{ props.label }
			</div>
			<div className="time">
				{ min + ':' + sec.toString(10).padStart(2,'0') }
			</div>
		</React.Fragment>
	);
}

export default Clock;