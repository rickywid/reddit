const INITIAL_STATE = { topics: [] }

export default function(state=INITIAL_STATE, action){
	//console.log(action.payload)

	switch(action.type){
		case 'GET_HOTTOPICS':

			return { 
				topics: action.payload.data.data.children.map(data=>{
					return {
						title: data.data.title,
						permalink: data.data.permalink, //comments link
						author: data.data.author,
						num_comments: data.data.num_comments,
						thumbnail: data.data.thumbnail,
						time: data.data.created_utc,
						ups: data.data.ups,
						subreddit: data.data.subreddit,
						thumbnail: data.data.thumbnail,
						url: data.data.url,
						domain: data.data.domain
					}				
				})
			 }

		case 'GET_SUBREDDIT':

			return { 
				topics: action.payload.data.data.children.map(data=>{
					return {
						title: data.data.title,
						permalink: data.data.permalink, //comments link
						author: data.data.author,
						num_comments: data.data.num_comments,
						thumbnail: data.data.thumbnail,
						time: data.data.created_utc,
						ups: data.data.ups,
						subreddit: data.data.subreddit,
						thumbnail: data.data.thumbnail,
						url: data.data.url,
						domain: data.data.domain
					}				
				})
			 }
		}

	return state;
}