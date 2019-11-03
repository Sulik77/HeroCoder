import { START_FIGHT } from "./types";

const initialState = {
  player: {
    type: "player",
    name: "player",
    avatar:
      "https://media.hearthpwn.com/avatars/297/167/636023914413148543.png",
    percs: {},
    stats: {
      health: 300,
      damage: 10
    }
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case START_FIGHT: {
      return {
        state
      };
    }

    default:
      return state;
  }
}
