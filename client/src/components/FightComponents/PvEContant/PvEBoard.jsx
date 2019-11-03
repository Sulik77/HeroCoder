import React from "react";
import { connect } from "react-redux";
import CharacterUnits from "./CharacterUnits";
import TableLogs from "./TableLogs";
import { StartFightAC } from "../../../redux/actions";

import CreateMob from "./helpers/createMob/createMob";
import startFight from "./helpers/initialFight/initialFight";

import "./../pveboard.css";
class PvEBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusFight: "hold",
      fightLogs: null,
      loading: true,
      player: null,
      mob: null
    };
  }

  goToFight = async () => {
    this.props.Figth();
    await this.setState({
      loading: true,
      statusFight: "fight"
    });
    const playerInitial = this.state.player;
    const fight = startFight(playerInitial, this.state.mob);
    await this.setState({
      statusFight: fight.log,
      player: fight.player,
      mob: fight.mob,
      loading: false,
      fightLogs: fight.logs
    });
  };

  goToRun = () => {};

  async componentDidMount() {
    const playerInitial = { ...this.props.player };
    const createMob = CreateMob(playerInitial);
    this.setState({
      player: playerInitial,
      mob: createMob,
      loading: false
    });
  }

  get startFightButton() {
    return (
      <>
        <button className="fight-btn" onClick={this.goToFight}>
          Начать бой
        </button>
        <button className="fight-btn" onClick={this.goToRun}>
          Отступить
        </button>
      </>
    );
  }

  get battleStatus() {
    return <div className="fight-status"> {this.state.statusFight} </div>;
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <img
            src="https://astrotalk.com/assets/img/gif-loader/load2.gif"
            alt="loading..."
          />
        </div>
      );
    }

    return (
      <>
        <div className="pveboard-wrap">
          <div className="pveboard-oponents">
            <CharacterUnits oponent={this.state.player} />
          </div>
          <div className="wrap-fight">
            <div>
              {this.state.statusFight === "hold"
                ? this.startFightButton
                : this.battleStatus}
            </div>
            <div className="logs-wrap">
              <TableLogs logs={this.state.fightLogs} />
            </div>
          </div>
          <div className="pveboard-oponents">
            <CharacterUnits oponent={this.state.mob} />
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(store) {
  return {
    player: { ...store.player }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    Figth: () => dispatch(StartFightAC())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PvEBoard);
