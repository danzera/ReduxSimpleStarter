// NPM MODULE IMPORTS
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import youTubeApiSearch from 'youtube-api-search';
import _ from 'lodash';

// COMPNENT IMPORTS
import SearchBar from './components/SearchBar';
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList';

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
			this.setState({
				videos,
				selectedVideo: videos[0]
			});
		});
	} // end youTubeSearch()

	// youTubeSearch function is passed as a callback function to <SearchBar />
	render() {
		const youTubeSearch = _.debounce((term) => {this.youTubeSearch(term)}, 500);

		return (
			<div>
				<h1>YouTube Search-O-Matic 5000</h1>
				<SearchBar onSearchTermChange={youTubeSearch} />
				<VideoDetails selectedVideo={this.state.selectedVideo} />
				<VideoList videos={this.state.videos}/>
			</div>
		);
	} // end render()
} // end <App />

ReactDOM.render(<App />, document.querySelector('.container'));

export default App;