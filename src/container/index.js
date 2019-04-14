import React from 'react'
import './index.css'
import HotMovie from "./hotmovie";
import TodayBox from "./todaybox";
import Soon from "./soon";
import Top10 from "./top10";

class Container extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            url1: [
                'https://api.douban.com/v2/movie/in_theaters?start=0&count=12',
                'http://api.douban.com/v2/movie/us_box?apikey=0df993c66c0c636e29ecbb5344252a4a'
            ],
            url2: [
                'http://api.douban.com/v2/movie/coming?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=12',
                'http://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10'
            ]
        }
    }

    render (){
        return (
            <div className="container">
                <div className="content">
                    <div className="showing-up">
                        <HotMovie title="正在热映" url={this.state.url1[0]}/>
                        <TodayBox title="北美今日票房" url={this.state.url1[1]}/>
                    </div>
                    <div className="shown-soon">
                        <Soon title="即将上映" url={this.state.url2[0]}/>
                        <Top10 title="TOP10" url={this.state.url2[1]}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default Container