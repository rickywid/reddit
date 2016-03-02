import React from 'react';
import { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Search } from '../actions/index';
import axios from 'axios';

class App extends Component {

	constructor(props){
		super(props)
		
		this.state = { subreddit: '' };

		this.onHandleChange = this.onHandleChange.bind(this);
		this.onHandleSubmit = this.onHandleSubmit.bind(this);
	}

	onHandleChange(e){
		this.setState({ subreddit: e.target.value })
	}

	onHandleSubmit(e){
		e.preventDefault();

		this.props.Search(this.state.subreddit)
			.then(()=>{
				browserHistory.push(`/r/${this.state.subreddit}`)
			});
	}

  render() {
    return (
      <div>
			<nav className="navbar navbar-default">
				<div className="container-fluid">

					<div className="navbar-header">
						<Link className="navbar-brand" to="/reddit">REDDIT-CLONE</Link>
						<ul className="nav navbar-nav">
							<li><Link to="/r/funny" className="nav-links">Funny</Link></li>
							<li><Link to="/r/food" className="nav-links">Food</Link></li>
							<li><Link to="/r/movies" className="nav-links">Movies</Link></li>
							<li><Link to="/r/diy" className="nav-links">DIY</Link></li>
							<li><Link to="/r/aww" className="nav-links">Aww</Link></li>
							<li><Link to="/r/showerthoughts" className="nav-links">Shower Thoughts</Link></li>
							<li><Link to="/r/todayilearned" className="nav-links">Today I Learned</Link></li>
							<li><Link to="/r/gifs" className="nav-links">Gifs</Link></li>
						</ul>
					</div>


					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

						<ul className="nav navbar-nav navbar-right">
							<form className="navbar-form navbar-left" role="search" onSubmit={this.onHandleSubmit}>
								<div className="form-group">
									<input type="text" className="form-control" placeholder="subreddit..." value={this.state.subreddit} onChange={ this.onHandleChange } />
								</div>
								<button type="submit" className="btn btn-warning">Submit</button>
							</form>
						</ul>
					</div>
				</div>
			</nav>

			{this.props.children}

			<footer>
				<div className="col-lg-12">
					<p className="pull-right">Reddit-Clone &copy; 2016</p>
				</div>
			</footer>
      </div>
    );
  }
}


function mapStateToProps(state){
	return ({ data: state})
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ Search: Search }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)