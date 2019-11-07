import { START_FIGHT, LOGIN, WIN_FIGHT } from "./types";

const initialState = {
  // user: { username: " ",hero:{}, avatar:
  // "https://media.hearthpwn.com/avatars/297/167/636023914413148543.png", },
  // loggedin: false,
  player: {
    type: "player",
    name: "player",
    avatar:
      "https://media.hearthpwn.com/avatars/297/167/636023914413148543.png",
    percs: [],
    stats: {
      lvl: 1,
      health: 300,
      damage: 10
    },
    gold: 0
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case START_FIGHT: {
      return;
    }
    case LOGIN: {
      return {
        ...state,
        user: action.user,
        loggedin: true
      };
    }
    case WIN_FIGHT: {
      const inialPlayer = state.player;
      inialPlayer.gold += action.gold;
      return {
        ...state,
        player: inialPlayer
      };
    }
    default:
      return state;
  }
}
