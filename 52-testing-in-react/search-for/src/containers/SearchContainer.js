import React from 'react'
import SearchBar from '../components/SearchBar'

class SearchContainer extends React.Component {
	state = {
		query: ''
	}
	render() {
		return (
			<div className="search-container">
				<SearchBar query={this.state.query} />
			</div>
		)
	}
}
export default SearchContainer
