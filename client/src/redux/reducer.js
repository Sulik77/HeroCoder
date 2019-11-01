import { CREATE_UNIT, START_FIGHT, END_FIGHT } from "./types";

const initialState = {
  fightStatus: "hold",
  fightLogs: null,
  player: {
    name: "player",
    avatar:
      "https://media.hearthpwn.com/avatars/297/167/636023914413148543.png",
    percs: {},
    stats: {
      health: 300,
      damage: 10
    }
  },
  mob: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_UNIT: {
      return {
        ...state,
        mob: action.payloadMob
      };
    }

    case END_FIGHT: {
      return {
        ...state,
        fightStatus: action.payloadFight,
        fightLogs: action.payloadLogs
      };
    }

    default:
      return state;
  }
}
