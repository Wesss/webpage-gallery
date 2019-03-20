import React, { Component } from "react";

class App extends Component {
    render() {
        return(
            <div>
                <div class="Landing">
                    <div class="Landing-focus">
                        <h2 class="Headline Headline--inverted Headline--2">
                            Wesley Cox
                        </h2>
                        <h1 class="Headline Headline--inverted Headline--1 u-marginBot-small">
                            Software Developer
                        </h1>
                        <button class="Button Button--inverted">View Gallery</button>
                    </div>
                </div>
                <Clock />
            </div>
        );
    }
}

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({date: new Date()});
    }
    render() {
        return (
            <div>
                {this.state.date.toLocaleTimeString()}
            </div>
        );
    }
}

export default App;
