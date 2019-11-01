import { CREATE_UNIT, START_FIGHT, END_FIGHT } from "./types";

const CreateUnitAC = CreateMob => {
  return {
    type: CREATE_UNIT,
    payloadMob: CreateMob
  };
};

const StartFightAC = () => {
  return {
    type: START_FIGHT
  };
};

const EndFightAC = fight => {
  return {
    type: END_FIGHT,
    payloadFight: fight
  };
};

const FightAC = (player, mob) => {
  function figthInitial(oponent) {
    const atributes = oponent.health + oponent.damage;
    return atributes;
  }
  const initialPlayer = figthInitial(player.stats);
  const initialMob = figthInitial(mob.stats);
  const initialFigth = initialPlayer > initialMob ? "Win" : "defeat";
  return dispatch => {
    dispatch(StartFightAC());
    dispatch(EndFightAC(initialFigth));
  };
};

const CreateFightAC = player => {
  return async dispatch => {
    const InitializePlayer = await player;
    console.log("InitializePlayer", InitializePlayer);

    function MobCreate(player) {
      function RandomNumber(generatorNameArray) {
        const arrayLength = generatorNameArray.length;
        const randomNumber = Math.floor(Math.random() * arrayLength);
        return randomNumber;
      }

      function GeneratorName(typeMob) {
        const generateFirstName = [
          "Веселый",
          "Убогий",
          "Вонючий",
          "Занудный",
          "Голодный",
          "Хохочущий",
          "Плачущий",
          "Страшный",
          "Злой",
          "Уставший"
        ];
        const generatorLastName = [
          "Нудист",
          "Программист",
          "Математик",
          "Шизофреник",
          "Оптимист",
          "Реалист",
          "пацифист",
          "Рассист",
          "Нацист"
        ];

        return (
          generateFirstName[RandomNumber(generateFirstName)] +
          " " +
          typeMob +
          " " +
          generatorLastName[RandomNumber(generatorLastName)]
        );
      }

      const mobAvatarList = {
        skelets: [
          "https://img2.freepng.ru/20180410/ugw/kisspng-goblin-runescape-re-monster-wiki-game-skeleton-5acc4121375602.8672641315233354572267.jpg",
          "https://art.pixilart.com/bc49837a2898ba4.png",
          "http://pixeljoint.com/files/icons/full/hixelton.png",
          "https://i.pinimg.com/originals/bc/b4/ff/bcb4ff04f09f9f97a9609e76ab1eaae3.png",
          "https://im0-tub-ru.yandex.net/i?id=8ba4bebeaf53808b35da3d971b4c54da&n=13"
        ],
        zombis: [
          "https://mir-s3-cdn-cf.behance.net/projects/max_808/21188277.5460ade7273fe.png",
          "https://image.freepik.com/free-vector/_61878-718.jpg",
          "https://art.pixilart.com/thumb/01d490a54fbc9c6.png",
          "https://s1.piq.land/2013/04/27/DIFdeAIdDSTgZXH2z2G9EULG_400x400.png"
        ],
        ghosts: [
          "http://pixelartmaker.com/art/a3b3b2afca88937.png",
          "https://www.pinclipart.com/picdir/big/134-1344931_cedae535cd2d4bd-pixel-art-halloween-ghost-clipart.png",
          "https://art.pixilart.com/04b9f6b7bbe6cdc.png",
          "http://pixelartmaker.com/art/6eb7e6f39df33c5.png"
        ]
      };

      const mobAvatarAndName = [
        {
          name: GeneratorName("Скелет"),
          avatar: mobAvatarList.skelets[RandomNumber(mobAvatarList.skelets)]
        },
        {
          name: GeneratorName("Зомби"),
          avatar: mobAvatarList.zombis[RandomNumber(mobAvatarList.zombis)]
        },
        {
          name: GeneratorName("Призрак"),
          avatar: mobAvatarList.ghosts[RandomNumber(mobAvatarList.ghosts)]
        }
      ];

      const user = InitializePlayer.stats;
      const randomPolar = Math.floor(Math.random() * 2) === 0 ? "-" : "+";
      const randomStats = Math.floor(Math.random() * 30);
      const randomValue = parseInt(randomPolar + randomStats);

      const mobType = mobAvatarAndName[RandomNumber(mobAvatarAndName)];
      const mobName = mobType.name;
      const mobAvatar = mobType.avatar;

      const mob = {
        name: mobName,
        avatar: mobAvatar,
        stats: {
          health: Math.floor(user.health + (user.health * randomValue) / 100),
          damage: Math.floor(user.damage + (user.damage * randomValue) / 100)
        }
      };
      return mob;
    }
    const CreateMob = MobCreate(player);

    dispatch(CreateUnitAC(CreateMob));
  };
};

export { CreateFightAC, FightAC };
