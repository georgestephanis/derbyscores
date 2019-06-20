
import React from 'react';

class IncrementButton extends React.Component {

	constructor() {
		super();
	}

	handleClick() {
		const props = this.props;

		props[ props.whichProperty ](
			props.whichTeam,
			( '-' === props.type ? -1 : 1 )
		);
	}
	
	render() {
		const props = this.props;
		if ( '-' === props.type && props.state[ props.whichTeam ][ props.whichProperty ] <= 0 ) {
			return (
				<button disabled className="circlebtn">
					{ '-' === props.type ? '-1' : '+1' }
				</button>
			)
		}
		return (
			<button onClick={ this.handleClick.bind( this ) } className="circlebtn">
				{ '-' === props.type ? '-1' : '+1' }
			</button>
		)
	}
}

export default IncrementButton;