import React from "react";
import { withRouter } from 'react-router'
import "./Skill.css";

class Skill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "",
      learn: false
    }
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
      let gold = session.player.gold
      if (gold >= this.props.data.params.gold) {
         gold = gold - this.props.data.params.gold;
         let resp = await fetch("/api/gold-update", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ gold })
        });
        const data = await resp.json();
        this.props.history.push(`/skill/test/${this.props.name}`)
      }
    }

    render() {
      const data = this.props.data;
      const desc =
        data.title +
        "\n" +
        data.opisanie +
        "\n" +
        "увеличение урона: +" +
        data.params.damage;

      return (
        <div className="skill-wrap">
          <div onClick={() => this.onClick()} className="skill" title={desc}>
            <img src={data.img} alt="" />
          </div>
        </div>
      );
    }
  }

  export default withRouter(Skill);
