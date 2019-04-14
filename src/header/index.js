import React from 'react'
import './index.css'
import topImage from '../images/film.jpg'

class Header extends React.Component{

    constructor(props){
        super(props);
        this.handleStatus = this.handleStatus.bind(this);
        this.state = {
            isClick: 0 //a标签状态，是否被点击，0:未点击 1:被点击
        }
    }

    componentDidMount(){

    }

    handleStatus(event){
        let code = parseInt(event.currentTarget.getAttribute('index'));
        this.setState({
            isClick: code
        });
        this.props.codeHandler(code);
    }

    render (){
        const nav_ul = ['首页', '电影', '榜单', '热点'];
        const nav_list = nav_ul.map( (value, index) => {
             return (
                 <li key={index}>
                    <a index={index} href="javascript:void(0);" className={this.state.isClick === index ? 'active' : ''}
                       onClick={this.handleStatus}>
                        {value}
                    </a>
                 </li>
             );
        });
        return (
            // 导航栏内容
            <div className="top">
                <div className="content">
                    <div className="left">
                        <img src={topImage} alt=""/>
                    </div>
                    <div className="nav">
                        <ul>
                            {nav_list}
                        </ul>
                    </div>
                    <form>
                        <input type="search" placeholder="找影片、找影人" className="search"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Header
