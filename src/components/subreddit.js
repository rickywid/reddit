import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Search } from '../actions/index';
import { Link } from 'react-router';
import moment from 'moment';

class Subreddit extends Component {

	componentDidMount(){
		this.props.Search(this.props.params.subreddit);
	}

	componentWillReceiveProps(props){
		this.props.Search(props.params.subreddit);
	}

	subReddits(data){
		return (
			<div className="col-lg-12 margin-bottom">
				<div className="col-lg-1 ups">
					<span className="glyphicon glyphicon-arrow-up"></span>
					{data.ups}
					<span className="glyphicon glyphicon-arrow-down"></span>
				</div>
				{ (data.thumbnail !== "" ? <div className="col-lg-1"><img className="thumbnail" src={data.thumbnail === "self" ? "http://www.mariogame.info/images/icon-facebook.png" : data.thumbnail } /></div> : null) }
				<div className="col-lg-10">
					<h4 className="title"><Link 	to={(data.domain === `self.${data.subreddit}` ? `reddit${data.permalink}` : data.url)} 
								target={(data.domain === `self.${data.subreddit}` ? "" : "_blank")}>{data.title}
						</Link>
						<span className="domain"> ({data.domain})</span>
					</h4>

					<p className="details">submitted {moment(data.time * 1000).fromNow()} by <span className="author">{data.author}</span></p>
					<p className="details"><Link to={`reddit${data.permalink}`} className="comments">{data.num_comments} comments</Link></p>
				</div>
			</div>

		)
	}

	render(){
		return (
			<div>
					<div className="subreddit-header-box">
						<p className="viewing">subreddit</p>
						<h3 className="subreddit-header">{`r/${this.props.params.subreddit}`}</h3>
					</div>
	
				{this.props.data.topics.map(this.subReddits)}
			</div>
		)
	}
}

function mapStateToProps(state){
	return ({ data: state.Topics});
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ Search: Search }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Subreddit);