
import './derbyscores.scss';

class Scoreboard extends React.Component {

	constructor() {
		super();

    this.state = {
      scoresHome: {
        team_name: "Home Team",
        score: 33,
        timeouts: 2,
        jammer: "LadyJelly",
      },
      scoresAway: {
        team_name: "Away Team",
        score: 44,
        timeouts: 1,
        jammer: "AwayJamBerry",
      },
      timesPeriod: {
        label: 1,
        time: 210,
      },
      timesJam: {
        label: 7,
        time: 67,
      },
    };

    this.tick = this.tick.bind( this );

    this.intervalHandle = setInterval( this.tick, 1000 );
	}

  tick() {
    let state = { ...this.state }

    if ( state.timesPeriod.time > 0 ) {
      state.timesPeriod.time--;
    }
    if ( state.timesJam.time > 0 ) {
      state.timesJam.time--;

    }

    this.setState( state );
  }

  render() {
    return (
      <React.Fragment>
        <section id="scores">
          <div id="home">
            <Score { ...this.state.scoresHome } />
          </div>
          <div id="away">
            <Score { ...this.state.scoresAway } />
          </div>
        </section>

        <section id="times">
          <div id="period">
            <Clock { ...this.state.timesPeriod } />
          </div>
          <div id="jam">
            <Clock { ...this.state.timesJam } />
          </div>
        </section>
      </React.Fragment>
    )
  }
}

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

ReactDOM.render(
  <Scoreboard />,
  document.getElementById('root')
);
