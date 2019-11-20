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

const EndFightFunctionAC = (user, goldValue) => {
  const fightResult = {
    playerName: user,
    gold: goldValue
  };

  return async dispatch => {
    const res = await fetch("/api/endFight", {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(fightResult)
    });
    const player = await res.json();

    dispatch(endFightAC(player));
  };
};

const endFightAC = user => {
  return {
    type: END_FIGHT,
    userInitial: user
  };
};

export { StartFightAC, loginAC, EndFightFunctionAC };
