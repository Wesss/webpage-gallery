import React, { Component } from "react";
import Headline from "./Headline.js";
import Clock from "./Clock.js";

class App extends Component {
    render() {
        return(
            <div>
                <div class="Landing">
                    <div class="Landing-focus">
                        <Headline headline="Wesley Cox" level={2} inverted={true}/>
                        <Headline headline="Software Developer" level={1} inverted={true}/>
                        <button class="Button Button--inverted">View Gallery</button>
                    </div>
                </div>
            </div>
        );

        /*
        <Clock/>
        <br/>
        <br/>
        <div>Project is currently under catstruction~</div>
        <br/>
        <img src="https://i.imgur.com/SisWrr0.jpg" style="max-width: 400px;"/>
        */
    }
}

export default App;
