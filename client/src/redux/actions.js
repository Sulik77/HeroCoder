import { START_FIGHT, LOGIN, END_FIGHT } from "./types";

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

const endFightAC = goldValue => {
  return {
    type: END_FIGHT,
    gold: goldValue
  };
};

export { StartFightAC, loginAC, endFightAC };
