import React from "react";


export default class Test extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            questions: []
        }
    }
    componentDidMount = async () => {

        let resp = await fetch("/api/test", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        });
        const data = await resp.json();
        await this.setState({ questions: data });
        console.log(this.state.questions);
        
    };

    render() {
        return (
            <div>
                <form>
                    {this.state.questions&&this.state.questions.map((element, index) => {
                       return <div key={index}>
                            <p>{element.question}</p>
                            <code>{element.code}</code>
                            {element.variants.map((variant,index) => {
                               return <div>
                                   <input key={10*index} type="radio"/>
                                   <p>{variant}</p>
                               </div>

                            })}
                        </div>
                    })}
                </form>
            </div>
        )
    }
}