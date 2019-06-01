
import React from 'react';

class IncrementButton extends React.Component {

	constructor() {
		super();
	}

	handleClick() {
		const props = this.props;
		props.setState( {
			...props.state,
			[ props.whichTeam ] : {
				...props.state[ props.whichTeam ],
				[ props.whichProperty ]: props.state[ props.whichTeam ][ props.whichProperty ] +
					( '-' === props.type ? -1 : 1 ),
			}
		} )
	}
	
	render() {
		return (
			<button onClick={ this.handleClick.bind( this ) }>
				{ '-' === this.props.type ? '-1' : '+1' }
			</button>
		)
	}
}

export default IncrementButton;