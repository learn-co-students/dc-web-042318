import React from 'react'
import SearchContainer from './SearchContainer'
import { shallow } from 'enzyme'
import SearchBar from '../components/SearchBar'

describe('shallow SearchContainer', () => {
	// it('renders succesfully', () => {
	// 	let wrapper = shallow(<SearchContainer />)
	// 	expect(wrapper.find('div').length).toEqual(1)
	// })
	// it('render the SearchBar component', () => {
	// 	let wrapper = shallow(<SearchContainer />)
	// 	expect(wrapper.containsMatchingElement(<SearchBar />)).toEqual(true)
	// })
	it('renders', () => {
		let wrapper = shallow(<SearchContainer />)
		expect(wrapper).toMatchSnapshot()
	})
})
