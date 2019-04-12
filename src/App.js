import React, { Component } from 'react';
// import './App.css';
import Header from './header'
import Footer from './footer'
import Container from "./container";

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*导航栏*/}
                <Header/>
                {/*导航栏结束*/}
                {/*电影容器*/}
                <Container/>
                {/*容器结束*/}
                {/*页脚*/}
                <Footer/>
                {/*页脚结束*/}
            </div>
        );
    }
}

export default App;
