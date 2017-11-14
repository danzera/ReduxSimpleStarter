import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};

		this.youTubeSearch = props.onSearchTermChange;
	} // end constructor()

	// onInputChange triggered by an onChange event from the <input> field of <SearchBar />
	onInputChange(term) {
		console.log('input change event triggered', event.target.value);
		this.setState({ term });
		this.youTubeSearch(term);
	}

	render() {
		return (
			<div>
				<input onChange={event => { this.onInputChange(event.target.value) }}/>
			</div>
		);
	}
} // end <SearchBar />

export default SearchBar;