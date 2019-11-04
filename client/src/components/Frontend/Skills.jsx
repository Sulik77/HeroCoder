import React from 'react';
import { Link } from "react-router-dom";
import Skil from "./Skil"

import "./Skills.css";
class Skills extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      skills: []
    }


    componentDidMount = async () => {
      let resp = await fetch ("/api/todos", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
      });
        const data = await resp.json();
        this.setState({skills: data})
}

    this.state = {
      skills: [
        {
          title: "Призыв леденяного элементаря 1",
          opisanie: "Герой призывает на свою сторону леденяного элементаря для одной атаки, имеющего огромный урон",
          image: 'img/perks/3.png',

          params: {
            damage: 300,
            chance: 0.1,
            xp: 220
          }
        },
        {
          title: "Призыв леденяного элементаря 2",
          opisanie: "Герой призывает на свою сторону леденяного элементаря для одной атаки, имеющего огромный урон",
          image: 'img/perks/2.png',
          params: {
            damage: 300,
            chance: 0.1,
            xp: 220
          }
        },
        {
          title: "Призыв леденяного элементаря 3",
          opisanie: "Герой призывает на свою сторону леденяного элементаря для одной атаки, имеющего огромный урон",
          image: 'img/perks/1.png',
          params: {
            damage: 300,
            chance: 0.1,
            xp: 220
          }
        }
      ]
    }
  }

  render() {
    return (
      <div className="body">
        <Link to="/">
          <div className="home">Home Page</div>
        </Link>
          <div className='perks-title--wrap'>
            <div className="perks-title">JS</div>
            <div className="perks-title">CSS</div>
            <div className="perks-title">HTML</div>
          </div>
        <div className="container-perks">
          {this.state.skills.map((element, index) => (
            <Skil data={element} key={index} />
          ))}

        </div>














        
                 {/* <table className="table" rules="none" align="center" cellPadding="58%"> */}
        {/* <tbody> */}
        {/* //             <tr>
//               <td>
//                 <Skil data={this.state.skills[0]} />
//               </td>
//               <td>
//                 <Skil data={this.state.skills[1]} />
//               </td>
//               <td>
//                 <Skil data={this.state.skills[2]} />
//               </td>
//             </tr> */}
                {/* <tr>
      //               <td>Умение 5</td>
      //               <td>Умение 6</td>
      //               <td>Умение 7</td>
      //               <td>Умение 8</td>
      //             </tr>
      //             <tr>
      //               <td>Умение 9</td>
      //               <td>Умение 10</td>
      //               <td>Умение 11</td>
      //               <td>Умение 12</td>
      //             </tr> */}
               {/* </tbody>
      //         </table> */}
      </div>
    )
  }

}

export default Skills;