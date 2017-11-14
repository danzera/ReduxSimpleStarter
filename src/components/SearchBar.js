import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};

		this.youTubeSearch = props.onSearchTermChange;
	} // end constructor()

	render() {
		return (
			<div>
				<input onChange={ event => {
					console.log('input change event triggered', event.target.value);
					this.setState({ term: event.target.vale });
					this.youTubeSearch(event.target.value);
				}}/>
			</div>
		);
	}
} // end <SearchBar />

export default SearchBar;