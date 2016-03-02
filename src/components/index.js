import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HotTopics } from '../actions/index';
import { Link } from 'react-router';
import moment from 'moment';

class Index extends Component {

	componentDidMount(){
		this.props.HotTopics()
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
					<h4 className="title"><Link 	to={(data.domain === `self.${data.subreddit}` ? data.permalink : data.url)} 
								target={(data.domain === `self.${data.subreddit}` ? "" : "_blank")}>{data.title}
						</Link>
						<span className="domain"> ({data.domain})</span>
					</h4>

					<p className="details">submitted {moment(data.time * 1000).fromNow()} by <span className="author">{data.author}</span> to <Link className="author" to={`/r/${data.subreddit}`}>{`/r/${data.subreddit}`}</Link></p>
					<p className="details"><Link to={data.permalink} className="comments">{data.num_comments} comments</Link></p>
				</div>
			</div>

		)
	}

	render(){
		return (
			<div>{this.props.data.topics.map(this.subReddits)}</div>
		)
	}
}

function mapStateToProps(state){
	return ({ data: state.Topics});
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ HotTopics: HotTopics }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);