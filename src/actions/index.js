import axios from 'axios';

export function Search(subreddit){
	const request = axios.get(`http://www.reddit.com/r/${subreddit}.json`);

	return {
		type: 'GET_SUBREDDIT',
		payload: request
	}
}

export function HotTopics(){
	const request = axios.get('http://www.reddit.com/hot.json');

	return {
		type: 'GET_HOTTOPICS',
		payload: request
	}
}

export function getComments(comments){
	const request = axios.get(`${comments}.json`);

	return {
		type: 'GET_COMMENTS',
		payload: request
	}
}