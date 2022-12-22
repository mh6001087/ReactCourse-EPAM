import React, { useState } from 'react';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

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

export default SearchBar;
