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

const winFightFunctionAC = (user, goldValue) => {
  const fightResult = {
    playerName: user,
    gold: goldValue
  };

  return async dispatch => {
    const res = await fetch("/game/win", {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(fightResult)
    });
    const player = await res.json();
  };
};

const loseFightFunctionAC = (user, goldValue) => {
  console.log(user);

  return async dispatch => {
    const fightResult = {
      playerName: user,
      gold: goldValue
    };
    const res = await fetch("/game/lose", {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(fightResult)
    });
    const player = await res.json();
  };
};

export { StartFightAC, loginAC, winFightFunctionAC, loseFightFunctionAC };

// const SetRegistrationFunctionAC = (inputName, inputPassword) => {
//     return async dispatch => {
//       dispatch(FetchSentAC());
//       const formData = {
//         inputName: inputName,
//         inputPassword: inputPassword
//       };
//       const res = await fetch("/users/registration", {
//         method: "post",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData)
//       });

//       const data = await res.json();
//       if (data.status === true) {
//         dispatch(RedirectToLoginAC("/login"));
//         dispatch(RedirectTrueAC());
//       } else {
//         dispatch(TakeErrorAC(data.errorStatus));
//       }
//       dispatch(FetchReceivedAC());

//       //Екшн передачи в стор
//     };
//   };
