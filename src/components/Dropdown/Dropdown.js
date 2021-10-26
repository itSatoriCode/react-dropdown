import React, { useEffect, useRef, useState } from 'react';
import { CurrencyDropdown, DropdownContainer } from './DropdownStyles';
import Flag from 'react-flagkit';
import { Text } from '../../globalStyles';
import { IconContext } from 'react-icons';
import { AiOutlineCaretDown } from 'react-icons/ai';
import DropdownList from '../DropdownList/DropdownList';

const Dropdown = ({ currency, setCurrency }) => {
	const [show, setShow] = useState(false);
	const listRef = useRef();

	const closeDropdown = (el) => {
		setCurrency(el.cur);
		setShow(false);
	};

	useEffect(() => {
		const handleMouseClick = (e) => {
			if (show && !listRef?.current?.contains(e.target)) {
				setShow(false);
			}
		};

		window.addEventListener('click', handleMouseClick);

		return () => {
			window.removeEventListener('click', handleMouseClick);
		};
	}, [show, listRef]);

	return (
		<DropdownContainer>
			<CurrencyDropdown onClick={() => setShow(true)}>
				<Flag size="32" country={currency.slice(0, -1)} />
				<Text color="#f4f4f4">{currency}</Text>
				<IconContext.Provider value={{ size: '1.3rem', color: '#dfdfdf' }}>
					<AiOutlineCaretDown />
				</IconContext.Provider>
			</CurrencyDropdown>
			<DropdownList
				show={show}
				listRef={listRef}
				closeDropdown={closeDropdown}
				setCurrency={setCurrency}
			/>
		</DropdownContainer>
	);
};

export default Dropdown;
