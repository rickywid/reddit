import React, { Component } from 'react';
import { getComments } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import moment from 'moment';


class Comments extends Component {

	componentDidMount(){
		this.props.getComments(
			`http://www.reddit.com/r/${this.props.params.subreddit}/comments/${this.props.params.id}/${this.props.params.title}`
		)}

	renderComments(data){
		console.log(data)
		return (
			<div>
				<div className="col-lg-12 parent-comment comment-box">
					<div className="col-lg-1 ups">
						<span className="glyphicon glyphicon-arrow-up"></span>
						{data.data.ups}
						<span className="glyphicon glyphicon-arrow-down"></span>
					</div>
					<div className="col-lg-11">
						<h5 className="comment-detail">{data.data.author} <span className="details comment-time-detail">{moment(data.data.created_utc * 1000).fromNow()}</span></h5>
						<p className="comment-body">{data.data.body}</p>
					</div>
					{(data.data.replies ? 


						data.data.replies.data.children.map(replies=>{
						{console.log(replies.data.created_utc)}
								return (
									<div className="col-lg-12 nested-comment comment-box">
						
										<div className="col-lg-1 ups">
											<span className="glyphicon glyphicon-arrow-up"></span>
											{replies.data.ups}
											<span className="glyphicon glyphicon-arrow-down"></span>
										</div>
										<div className="col-lg-8">
											<p className="comment-detail">{replies.data.author} <span className="details comment-time-detail">{moment(replies.data.created_utc * 1000).fromNow()}</span></p>
											<p className="comment-body">{replies.data.body}</p>
										</div>
									</div>
								)
							})


						: null)}


				</div>


			</div>
		)
	}

	render(){
		return (
			<div>
				<div className="topic-head">
					<div className="row">
						<div className="col-lg-12">
							<div className="col-lg-1 ups">
								<span className="glyphicon glyphicon-arrow-up"></span>
									{this.props.data.ups}
								<span className="glyphicon glyphicon-arrow-down"></span>
							</div>
							
							{ (this.props.data.thumbnail !== "" ? <div className="col-lg-1"><img className="thumbnail" src={this.props.data.thumbnail === "self" ? "http://www.mariogame.info/images/icon-facebook.png" : this.props.data.thumbnail } /></div> : null) }

							<div className="col-lg-10">
								<h4 className="title"><Link 	to={(this.props.data.domain === `self.${this.props.data.subreddit}` ? this.props.data.permalink : this.props.data.url)} 
																target={(this.props.data.domain === `self.${this.props.data.subreddit}` ? "" : "_blank")}>{this.props.data.title}
									</Link>
									<span className="domain"> ({this.props.data.domain})</span>
									<p className="details">submitted {moment(this.props.data.time * 1000).fromNow()} by <span className="author">{this.props.data.author}</span> to <Link className="author" to={`/r/${this.props.data.subreddit}`}>{`/r/${this.props.data.subreddit}`}</Link></p>
									<p className="details"><Link to={this.props.data.permalink} className="comments">{this.props.data.num_comments} comments</Link></p>
								</h4>
							</div>
						</div>
					</div>
				</div>

				<div>
					{this.props.data.comments.map(this.renderComments)}
				</div>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ getComments: getComments }, dispatch)
}

function mapStateToProps(state){
	return ({ data: state.Comments})
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);