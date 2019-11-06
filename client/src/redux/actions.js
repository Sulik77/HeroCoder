import { START_FIGHT, LOGIN } from "./types";

const StartFightAC = () => {
  return {
    type: START_FIGHT
  };
};

const loginAC = data => {
  return {
    type: LOGIN,
    user: data
  };
};

export { StartFightAC,loginAC };
