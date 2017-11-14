// NPM MODULE IMPORTS
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// COMPNENT IMPORTS
import SearchBar from './components/SearchBar';

// <App /> COMPONENT
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};
	} // end constructor

	render() {
		return (
			<div>
				Greetings from App!
				<SearchBar />
			</div>
		);
	} // end render()
} // end <App />

ReactDOM.render(<App />, document.querySelector('.container'));

export default App;