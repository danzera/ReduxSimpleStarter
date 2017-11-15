import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};
	} // end constructor()

	// onInputChange triggered by an onChange event from the <input> field of <SearchBar />
	onInputChange(term) {
		this.setState({ term });
		this.props.onSearchTermChange(term);
	}

	render() {
		return (
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={event => { this.onInputChange(event.target.value) }}/>
			</div>
		);
	}
} // end <SearchBar />

export default SearchBar;