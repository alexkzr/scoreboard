var PLAYERS = [
  {
    name: "Alec Bolduin",
    score: 31,
    id: 1
  },
  {
    name: "Superman",
    score: 15,
    id: 2
  },
  {
    name: "The Incredible Hulk",
    score: 27,
    id: 3
  }
];

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: React.PropTypes.string.isRequired };
  }

  render() {
    return (
      <div className="header">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: React.PropTypes.string.isRequired };
  }

  render() {
    return (
      <div className="player">
        <div className="player-name">{this.props.name}</div>
        <div className="player-score">
          <Counter />
        </div>
      </div>
    );
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { score: 0 };
  }

  propTypes: {};

  incrementScore(e) {
    this.setState({
      score: this.state.score + 1
    });
  }
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <div className="counter-score"> {this.state.score} </div>
        <button
          className="counter-action increment"
          onClick={this.incrementScore}
        >
          {" "}
          +{" "}
        </button>
      </div>
    );
  }
}

class Application extends React.Component {
  render() {
    return (
      <div className="scoreboard">
        <Header title={this.props.title} />
        <div className="players">
          {this.props.players.map(player => {
            return (
              <Player name={player.name} score={player.score} key={player.id} />
            );
          })}
        </div>
      </div>
    );
  }
}

Application.propTypes = {
  title: React.PropTypes.string,
  players: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      score: React.PropTypes.number.isRequired,
      id: React.PropTypes.number.isRequired
    })
  ).isRequired
};

ReactDOM.render(
  <Application title="My ScoreBoard" players={PLAYERS} />,
  document.getElementById("container")
);
