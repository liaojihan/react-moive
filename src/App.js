import React, { Component } from 'react';
// import './App.css';
import Header from './header'
// import Footer from './footer'
import Container from "./container";
import Film from "./film"
import List from "./list"
import Plume from "./plume"
import Footer from "./footer";

class App extends Component {

    constructor(props){
        super(props);
        this.codeHandler = this.codeHandler.bind(this);
        this.state = {
            navCode: 0 // 0:首页，1:电影，2: 榜单， 3: 热点
        }
    }

    codeHandler(code) {
        this.setState({
            navCode: parseInt(code)
        })
    };

    render() {
        return (
            <div className="App">
                <Header codeHandler={this.codeHandler}/>
                {
                    (
                        () => {
                            switch (this.state.navCode){

                                case 1:
                                    return <Film/>;

                                case 2:
                                    return <List/>;

                                case 3:
                                    return <Plume/>;

                                default:
                                    return <Container/>;

                            }
                        }
                    )()
                }
                <Footer/>
            </div>
        );
    }
}

export default App;
