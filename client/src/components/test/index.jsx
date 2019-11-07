import React from "react";
import "./tests.css";
import Button from 'react-bootstrap/Button';
import { loginAC } from "../../redux/actions";
import { connect } from "react-redux";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }
  componentDidMount = async () => {
    const resp = await fetch("/api/check-sesion", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    const data = await resp.json();
    console.log("Test", data);
    if (data.status === 1) {
      this.setState({ error: data.error });
    } else {
      this.props.login(data);
    }

    const respGetTest = await fetch("/api/test", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    const dataTest = await respGetTest.json();
    await this.setState({ questions: dataTest });
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
          <div className="go">
            <Button variant="outline-primary" size="lg" block>
              GO
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: data => dispatch(loginAC(data))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Test);