import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Index from './components/index';
import Subreddit from './components/subreddit';
import Comments from './components/comments';


export default (

	<Route path="/reddit" component={App}>
		<IndexRoute component={Index} /> 
		<Route path="r/:subreddit" component={Subreddit} />
		<Route path="r/:subreddit/comments/:id/:title" component={Comments} />
	</Route>

)