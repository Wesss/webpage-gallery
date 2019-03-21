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
                <Clock/>
            </div>
        );
    }
}

export default App;
