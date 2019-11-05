import { START_FIGHT,LOGIN } from "./types";

const initialState = {
  user: { username: " ", email: " " },
  loggedin: false,
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
    }
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case START_FIGHT: {
    }
    case LOGIN: {
      return {
        ...state,
        user: action.user,
        loggedin: true
      };
    }

    default:
      return state;
  }
}
