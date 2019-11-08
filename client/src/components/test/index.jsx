import React from "react";
import "./tests.css";
import Button from 'react-bootstrap/Button';
import { loginAC } from "../../redux/actions";
import { connect } from "react-redux";
import { withRouter } from 'react-router'


class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      answers: [],
      trueAnswers: [],
      done: null
    };
  }
  componentDidMount = async () => {
    const resp = await fetch("/api/check-session", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    const data = await resp.json();
    if (data.status === 1) {
     await this.setState({ error: data.error });
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
    let trueVariant = [];
    dataTest.map((question) => {
      question.trueVariants.map((variants) => {
        trueVariant.push(variants);
      })
    })
    await this.setState({ trueAnswers: trueVariant })
  };

  handleInput = async e => {
    const answer = this.state.answers;
    answer.push(e.target.name)
    await this.setState({ answers: answer });
  };

  onSubmit = async e => {
    e.preventDefault();
    let answersUser = this.state.answers.sort();
    let trueAnswers = this.state.trueAnswers.sort();
    const test2 = JSON.stringify(answersUser);
    const test1 = JSON.stringify(trueAnswers);
    if (test2 === test1) {
     await this.setState({ done: true })
     const skill = this.props.match.params.id;
     const resp = await fetch("/api/check-session", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    const data = await resp.json();
    if (data.status === 1) {
     await this.setState({ error: data.error });
    } else {
      this.props.login(data);
    }
    }
    else {
     await this.setState({ done: false })
    }
  }


  render() {
    return (
      <div className="tests-form-wrap">
        <form onSubmit={this.onSubmit} className="tests-form">
          {this.state.questions &&
            this.state.questions.map((element, index) => {
              return (
                <div key={index} className="test-wrap">
                  <div>
                    <p className="test-question">{element.question}</p>
                    {element.code ? (
                      <div name="question" className="test-code">
                        <code>{element.code}</code>
                      </div>
                    ) : (
                        ""
                      )}
                    <div className="test-answerd-wrap">
                      {element.variants.map((variant, index) => {
                        return (
                          <div className="test-answerd">
                            <input key={10 * index} name={variant} onChange={this.handleInput} type="radio"></input>
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
            <Button variant="outline-primary" type="submit" size="lg" block>
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

export default withRouter(connect(
  null,
  mapDispatchToProps
)(Test));