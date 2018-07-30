import React from 'react'
import SearchBar from './SearchBar'
import { shallow } from 'enzyme'

it('renders SearchBar', () => {
	let wrapper = shallow(<SearchBar />)
	expect(wrapper.find('input').length).toEqual(1)
})
