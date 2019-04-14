import React, {Component} from 'react'
import all from '../../images/arrow_right.png'
import loadingImg from '../../images/Ripple-1s-200px.gif'
import fetchJsonp from 'fetch-jsonp'

class HotMovie extends Component{

    constructor(props) {
        super(props);
        this.movieItem = this.movieItem.bind(this);
        this.state = {
            list: null
        }
    }

    componentWillMount() {
        fetchJsonp(
            this.props.url,
            {
                method: 'GET',
                mode: 'cors',
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        ).then(response => response.json())
            .then(result => {
                this.setState({
                    list: result['subjects']
                })
            });
    }

    movieItem(event) {
        console.log(event.currentTarget.getAttribute('index'));
    }
    render() {

        const { list } = this.state;
        let dd_list;
        if (list) {
            dd_list = list.map( (value, index) => {
                return (
                    <dd key={index}>
                        <div className="movie-item">
                            <a href="javascript:void(0);" index={value.id} onClick={this.movieItem} title={value.title}>
                                <img src={value.images.small} alt=""/>
                                <div className="position active">
                                    <span>
                                        {
                                            value.title.length > 6
                                                ?
                                                value.title.substring(0, 5) + '...'
                                                :
                                                value.title
                                        }
                                    </span>
                                    <i>
                                        {
                                            value.rating.average == 0
                                                ?
                                                '暂无'
                                                :
                                                value.rating.average
                                        }
                                    </i>
                                </div>
                            </a>
                        </div>
                    </dd>
                );
            });
        }else {
            dd_list = <img src={loadingImg} alt="" className="loadingImg"/>
        }
        return (
            <div className="movie-grid">
                <div className="head">
                    <img src={all} alt=""/>
                    <span className="all"><a href="#">全部</a></span>
                    <span className="hot">{this.props.title}</span>
                </div>
                <div className="movie-list">
                    <dl className="movie_dl">
                        {dd_list}
                    </dl>
                </div>
            </div>
        );
    }
}

export default HotMovie