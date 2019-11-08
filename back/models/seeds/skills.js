const Skill = require("../skill");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/HeroCoder", {
  useNewUrlParser: true
});

const skills = [
  {
    title: "Расенган",
    opisanie:
      "Мана фокусируется в ладони пользователя, с её же помощью формирует из него сферу, внутри которой мана вращается с огромной скоростью, что даёт такой сильный эффект при ударе. ",
    img: "img/perks/1.png",
    branch: "JavaScrypt",
    params: {
      damage: 100,
      chance: 0.2,
      gold: 3
    }
  },
  {
    title: "Чидори",
    opisanie:
      "Осуществляется через сосредоточивание большого количества маны в ладони руки, пока та не становиться видна. Доводя до лимита собственное тело, тот, кто использует это умение, всё с большей скоростью сгущает всё больше маны, которая становиться всё мощнее и становися оружием пробивающим любую преграду.",
    img: "img/perks/2.png",
    branch: "JavaScrypt",
    params: {
      damage: 120,
      chance: 0.15,
      gold: 4
    }
  },
  {
    title: "Огненная длань",
    opisanie:
      "Герой выполнет призыв огненной птицы, которая атакует соперника и наносит тому урон",
    img: "img/perks/3.png",
    branch: "JavaScrypt",
    params: {
      damage: 50,
      chance: 0.6,
      gold: 10
    }
  },
  {
    title: "Призыв леденяного элементаря",
    opisanie:
      "Герой призывает на свою сторону леденяного элементаря для одной атаки, имеющего огромный урон",
    img: "img/perks/4.png",
    branch: "JavaScrypt",
    params: {
      damage: 300,
      chance: 0.1,
      gold: 30
    }
  },
  {
    title: "Лечение",
    opisanie:
      "Герой может немного восстановить свое здоровье прямо посреди битвы",
    img: "img/perks/5.png",
    branch: "JavaScrypt",
    params: {
      health: 70,
      chance: 0.2,
      gold: 35
    }
  },
  {
    title: "Jingu Mastery",
    opisanie:
      "Удары героя пробуждают мощь Цзиньгубана. Каждая четвертая атака по вражескому герою дарует четыре усиленные атаки с дополнительным уроном.",
    img: "img/perks/6.png",
    branch: "CSS",
    params: {
      damage: 40,
      chance: 0.3,
      gold: 45
    }
  },
  {
    title: "Spark Wraith",
    opisanie:
      "Призывает призрачную искру, которая медленно материализуется и сторожит выделенную область. При появлении врага искра бросается на него и взрывается, нанося жертве магический урон и замедляя её.",
    img: "img/perks/7.png",
    branch: "CSS",
    params: {
      damage: 250,
      chance: 0.4,
      gold: 100
    }
  },
  {
    title: "Finger of Death",
    opisanie: "Разрывает вражеское существо, пытаясь вывернуть его наизнанку. ",
    img: "img/perks/8.png",
    branch: "CSS",
    params: {
      damage: 300,
      chance: 0.2,
      gold: 170
    }
  },
  {
    title: "Shadowraze",
    opisanie:
      "Герой опустошает участок земли прямо перед собой, нанося урон всем врагам в зоне действия.  ",
    img: "img/perks/9.png",
    branch: "HTML",
    params: {
      damage: 90,
      chance: 0.6,
      gold: 17
    }
  },
  {
    title: "Chaos Bolt",
    opisanie:
      " Выпускает таинственный заряд энергии в указанного врага,  нанося случайный урон ",
    img: "img/perks/10.png",
    branch: "HTML",
    params: {
      damage: 60 - 100,
      chance: 0.2,
      gold: 10
    }
  },
  {
    title: "Blade Fury",
    opisanie:
      " Герой крутится в вихре сокрушительных ударов клинком, нанося урон врагам поблизости ",
    img: "img/perks/11.png",
    branch: "HTML",
    params: {
      damage: 140,
      chance: 0.3,
      gold: 30
    }
  }
];

Skill.insertMany(skills).then(() => {
  mongoose.connection.close();
});
