import { START_FIGHT, LOGIN, END_FIGHT } from "./types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case START_FIGHT: {
      return {
        ...state
      };
    }
    case LOGIN: {
      return {
        ...state,
        user: action.user,
        loggedin: true
      };
    }
    case END_FIGHT: {
      console.log("state=======>", state);

      const inialPlayer = state.user.player;
      inialPlayer.gold += action.gold;
      return {
        ...state,
        user: inialPlayer
      };
    }
    default:
      return state;
  }
}
