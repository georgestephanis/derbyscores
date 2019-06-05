
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
		const props = this.props;
		if ( '-' === props.type && props.state[ props.whichTeam ][ props.whichProperty ] <= 0 ) {
			return (
				<button disabled>
					{ '-' === props.type ? '-1' : '+1' }
				</button>
			)
		}
		return (
			<button onClick={ this.handleClick.bind( this ) }>
				{ '-' === props.type ? '-1' : '+1' }
			</button>
		)
	}
}

export default IncrementButton;