
import React from 'react';

function Log( props ) {
    return (
        <ul class="log">
            { props.log.map( entry => <li>{ entry }</li> ) }
        </ul>
    );
}

export default Log;