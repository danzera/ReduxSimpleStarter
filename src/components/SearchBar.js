import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};
	} // end constructor()

	render() {
		return (
			<div>
				<input />
			</div>
		);
	}
} // end <SearchBar />

export default SearchBar;