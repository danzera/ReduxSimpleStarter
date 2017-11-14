// NPM MODULE IMPORTS
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import youTubeApiSearch from 'youtube-api-search';

// COMPNENT IMPORTS
import SearchBar from './components/SearchBar';

// VARIABLE DECLARATIONS
const API_KEY = 'AIzaSyC_d_AOhR5ZNo2XA7avz83W2qJCmlr6bN0';

// <App /> COMPONENT
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		// run an initial video search to seed the <App /> with some initial data
		// YouTube returns top 5 trending videos or something like that if an empty string is sent
		this.youTubeSearch('');
	} // end constructor()

	youTubeSearch(term) {
		const options = {
			key: API_KEY,
			term
		};

		youTubeApiSearch(options, videos => {
			console.log('youTubeApiSearch for term', options.term, 'results', videos);
			this.setState({
				videos,
				selectedVideo: videos[0]
			});
		});
	} // end youTubeSearch()

	render() {
		return (
			<div>
				<h1>YouTube Search-O-Matic 5000</h1>
				<SearchBar />
			</div>
		);
	} // end render()
} // end <App />

ReactDOM.render(<App />, document.querySelector('.container'));

export default App;