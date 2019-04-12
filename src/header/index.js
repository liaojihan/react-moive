import React from 'react'
import './index.css'
import topImage from '../images/film.jpg'

class Header extends React.Component{

    constructor(props){
        super(props);
        this.handleStatus = this.handleStatus.bind(this);
        this.state = {
            status: 0, //a标签状态，是否被点击，0:未点击 1:被点击
        }
    }

    componentDidMount(){

    }

    handleStatus(event){
        console.log(event.currentTarget);
    }

    render (){
        const nav_ul = ['首页', '电影', '榜单', '热点'];
        const nav_list = nav_ul.map( (value, index) => {
             return (
                 <li key={index}>
                    <a href="javascript:void(0);" className={this.state.status === 0 ? 'active' : ''}
                       onClick={this.handleStatus}>
                        {value}
                    </a>
                 </li>
             );
        });
        return (
            // 导航栏内容
            <div className="top">
                <div className="top_content">
                    <div className="content_left">
                        <img src={topImage} alt=""/>
                    </div>
                </div>
                <div className="content_nav">
                    <ul>
                        {nav_list}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header
