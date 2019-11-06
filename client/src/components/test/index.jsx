import React from "react";
import "./tests.css";

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }
  componentDidMount = async () => {
    let resp = await fetch("/api/test", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    const data = await resp.json();
    await this.setState({ questions: data });
    console.log(this.state.questions);
  };

  render() {
    return (
      <div className="tests-form-wrap">
        <form className="tests-form">
          {this.state.questions &&
            this.state.questions.map((element, index) => {
              return (
                <div key={index} className="test-wrap">
                  <div>
                    <p className="test-question">{element.question}</p>
                    {element.code ? (
                      <div className="test-code">
                        <code>{element.code}</code>
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="test-answerd-wrap">
                      {element.variants.map((variant, index) => {
                        return (
                          <div className="test-answerd">
                            <input key={10 * index} type="radio"></input>
                            <a>{variant}</a>
                          </div>
                        );
                      })}
                    </div>
                    <p></p>
                  </div>
                </div>
              );
            })}
            <button>GO</button>
        </form>
      </div>
    );
  }
}
