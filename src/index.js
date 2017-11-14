import React, {Component} from 'react';
import ReactDOM from 'react-dom';

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
			</div>
		);
	} // end render()
} // end <App />

ReactDOM.render(<App />, document.querySelector('.container'));