const INITIAL_STATE = { 
						title: "",
						permalink: "",
						author: "",
						num_comments: "",
						thumbnail: "",
						time: "",
						ups: "",
						subreddit: "",
						url: "",
						domain: "",

						comments: []
					}

export default function(state=INITIAL_STATE, action){
	//console.log(action.payload)

	switch(action.type){
		case 'GET_COMMENTS':

			return { 
				title:  action.payload.data[0].data.children[0].data.title,
				permalink:  action.payload.data[0].data.children[0].data.permalink,
				author:  action.payload.data[0].data.children[0].data.author,
				num_comments:  action.payload.data[0].data.children[0].data.num_comments,
				thumbnail:  action.payload.data[0].data.children[0].data.thumbnail,
				time:  action.payload.data[0].data.children[0].data.time,
				ups:  action.payload.data[0].data.children[0].data.ups,
				subreddit:  action.payload.data[0].data.children[0].data.subreddit,
				url:  action.payload.data[0].data.children[0].data.url,
				domain:  action.payload.data[0].data.children[0].data.domain,

				comments: action.payload.data[1].data.children
			 }
	}
	return state;
}