import React from 'react'
import App from './App'
import { shallow } from 'enzyme'
import SearchContainer from '../containers/SearchContainer'

describe('App', () => {
	let wrapper
	beforeEach(() => {
		wrapper = shallow(<App />)
	})
	it('renders successfully', () => {
		expect(wrapper.find('.App').length).toEqual(1)
	})
	it('renders the <SearchContainer />', () => {
		expect(wrapper.containsMatchingElement(<SearchContainer />)).toEqual(true)
	})
})
