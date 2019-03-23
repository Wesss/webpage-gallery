import React, { Component } from "react";
import Headline from "./Headline.js";
import Clock from "./Clock.js";

const NAV_STATE = {
    LANDING: "landing",
    GALLERY: "gallery"
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {navState: NAV_STATE.LANDING};
    }

    clickViewGallery = () => {
        this.setState({navState: NAV_STATE.GALLERY});
    }

    render() {
        switch (this.state.navState) {
            case NAV_STATE.LANDING:
                return(
                    <div class="Landing">
                        <div class="Landing-focus">
                            <Headline headline="Wesley Cox" level={2} inverted={true}/>
                            <Headline headline="Software Developer" level={1} inverted={true}/>
                            <button class="Button Button--inverted" onClick={this.clickViewGallery}>
                                View Gallery
                            </button>
                        </div>
                    </div>
                );
                break;
            case NAV_STATE.GALLERY:
                return(
                    <div class="BasePage">
                        <div class="BasePage-sideNav">
                            <Clock/>
                            <br/>
                            <br/>
                            side nav
                        </div>
                        <div class="BasePage-content">
                            <div class="testcontent">
                                <br/>
                                <br/>
                                <div>Project is currently under catstruction~</div>
                                <br/>
                                <img class="CatImage" src="https://i.imgur.com/SisWrr0.jpg"/>
                            </div>
                        </div>
                    </div>
                );
                break;
        }
        /*

        */
    }
}

export default App;
