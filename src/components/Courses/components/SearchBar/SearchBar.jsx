import React, { useState } from 'react';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import ProtoTypes from 'prop-types';

const SearchBar = ({ onChange }) => {
	const [inputSearch, setInputSearch] = useState('');
	const onCoursesSearch = (key) => {
		onChange(key);
	};
	const onInputChange = (search) => {
		setInputSearch(search);
		if (!search) {
			onCoursesSearch('');
		}
	};
	return (
		<div style={{ display: 'flex', gap: '1rem' }}>
			<Input
				type='text'
				placeholder={'Enter course name or id'}
				onChange={(e) => onInputChange(e.target.value)}
				value={inputSearch}
			/>
			<Button
				buttonText={'Search'}
				onClick={() => onCoursesSearch(inputSearch)}
				style={{ padding: '10px 24px', marginLeft: '10px' }}
			/>
		</div>
	);
};
SearchBar.propTypes = {
	onChange: ProtoTypes.func.isRequired,
};
export default SearchBar;
