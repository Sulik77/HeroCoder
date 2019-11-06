import { START_FIGHT, LOGIN, WIN_FIGHT } from "./types";

const initialState = {
  user: { username: " ",hero:{}, avatar:
  "https://media.hearthpwn.com/avatars/297/167/636023914413148543.png", },
  loggedin: false,
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
