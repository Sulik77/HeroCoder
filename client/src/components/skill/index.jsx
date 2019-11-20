import React from "react";
import { withRouter } from "react-router";
import "./Skill.css";

class Skill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "",
      learn: false
    };
  }

  onClick = async () => {
    const login = await fetch("/api/check-session", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    const session = await login.json();
    const resp = await fetch("/api/update-store", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(session)
    });
    const dataGold = await resp.json();
    let gold = dataGold.player.gold;
    if (gold >= this.props.data.params.gold) {
      const goldUpdate = gold - this.props.data.params.gold;
       let resp = await fetch("/api/gold-update", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({goldUpdate})
      });
      const data = await resp.json();
      this.props.history.push(`/skill/test/${this.props.name}`)
    }
  };

  render() {
    const data = this.props.data;
    const desc =
      data.title +
      "\n " +
      "\n" +
      data.opisanie +
      "\n" +
      "увеличение урона: +" +
      data.params.damage;

    return (
      <div className="skill-wrap">
        <div
          onClick={() => this.onClick()}
          className="skill"
          title={
            desc +
            "\n" +
            "\n" +
            "Стоимость изучения: " +
            data.params.gold +
            " золота"
          }
        >
          <img src={data.img} alt="" />
        </div>
      </div>
    );
  }
}

export default withRouter(Skill);
