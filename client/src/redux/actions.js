import { START_FIGHT, LOGIN, WIN_FIGHT } from "./types";

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

const winFightAC = goldValue => {
  return {
    type: WIN_FIGHT,
    gold: goldValue
  };
};

export { StartFightAC, loginAC, winFightAC };
