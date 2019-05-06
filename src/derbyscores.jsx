
import './derbyscores.scss';

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

function Clock( props ) {
  return (
    <React.Fragment>
      <div className="label">
        { props.label }
      </div>
      <div className="time">
        { props.time }
      </div>
    </React.Fragment>
  );
}

ReactDOM.render(
  <Score team_name="Home Team" score="33" timeouts="2" jammer="LadyJelly" />,
  document.getElementById('home')
);

ReactDOM.render(
  <Score team_name="Away Team" score="44" timeouts="1" jammer="AwayJamBerry" />,
  document.getElementById('away')
);

ReactDOM.render(
  <Clock label="1" time="3:30" />,
  document.getElementById('period')
);

ReactDOM.render(
  <Clock label="7" time="1:17" />,
  document.getElementById('jam')
);