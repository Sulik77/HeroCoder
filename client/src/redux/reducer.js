import { START_FIGHT, LOGIN, END_FIGHT } from "./types";

const initialState = {
  user: { player: "null" }
};

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
      return {
        ...state,
        user: action.userInitial
      };
    }
    default:
      return state;
  }
}
