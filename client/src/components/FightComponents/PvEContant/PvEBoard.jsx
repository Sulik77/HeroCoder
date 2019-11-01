import React from "react";
import { connect } from "react-redux";
import CharacterUnits from "./CharacterUnits";
import TableLogs from "./TableLogs";
import { CreateFightAC, FightAC } from "../../../redux/actions";

import "./../pveboard.css";
class PvEBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusFight: "hold",
      loading: true,
      player: null,
      mob: null
    };
  }

  goToFight = async () => {
    await this.props.Figth(this.state.player, this.state.mob);
    this.setState({
      statusFight: this.props.statusFight
    });
  };

  goToRun = () => {};

  async componentDidMount() {
    await this.props.CreateFight(this.props.player);
    await this.setState({
      player: this.props.player,
      mob: this.props.mob
    });
    await this.setState({
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
      <div>
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
              <TableLogs logs={this.props.fightLogs} />
            </div>
          </div>
          <div className="pveboard-oponents">
            <CharacterUnits oponent={this.state.mob} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    player: store.player,
    mob: store.mob,
    statusFight: store.fightStatus,
    fightLogs: store.fightLogs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    CreateFight: player => dispatch(CreateFightAC(player)),
    Figth: (player, mob) => dispatch(FightAC(player, mob))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PvEBoard);
