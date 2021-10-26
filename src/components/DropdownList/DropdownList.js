import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import data from '../../data/data.json';
import popular from '../../data/popular.json';
import { CountryInput, Label, List, ListItem } from './DropdownListStyles';
import { Container, Text } from '../../globalStyles';
import Flag from 'react-flagkit';

const DropdownList = ({ closeDropdown, show, listRef }) => {
	const [search, setSearch] = useState('');

	useEffect(() => {
		if (!show) {
			setSearch('');
		}
	}, [show]);

	const handleSearch = (searchText) => {
		setSearch(searchText);
	};

	const filterCountry = (el) => {
		const searchText = search.trim().toLocaleLowerCase();

		const name = el.name.trim().toLocaleLowerCase().includes(searchText);
		const code = el.cur.trim().toLocaleLowerCase().includes(searchText);

		return name || code;
	};

	return (
		<AnimatePresence>
			{show && (
				<List
					initial={{ opacity: 0, height: '0%' }}
					animate={{ opacity: 1, height: 'auto' }}
					exit={{ opacity: 0 }}
				>
					<Container ref={listRef}>
						<ListItem padding="0" noHover>
							<IconContext.Provider value={{ size: '2rem', color: '#c9c9c9' }}>
								<AiOutlineSearch />
							</IconContext.Provider>
							<CountryInput
								value={search}
								onChange={(e) => handleSearch(e.target.value)}
								type="text"
							/>
						</ListItem>

						{search.length === 0 && (
							<>
								<ListItem noHover noPointer>
									<Label weight="bold">Popular Currencies</Label>
								</ListItem>

								{popular.map((el, index) => (
									<ListItem key={index} onClick={() => closeDropdown(el)}>
										<Flag size={28} country={el.cur.slice(0, -1)} />{' '}
										<Text>{el.cur}</Text>
										<Label size="1rem">{el.name}</Label>
									</ListItem>
								))}

								<ListItem noHover noPointer>
									<Label weight="bold">All Currencies</Label>
								</ListItem>
							</>
						)}

						{data
							.filter((el) => filterCountry(el))
							.map((el, index) => (
								<ListItem key={index} onClick={() => closeDropdown(el)}>
									<Flag size={28} country={el.cur.slice(0, -1)} />{' '}
									<Text>{el.cur}</Text>
									<Label size="1rem">{el.name}</Label>
								</ListItem>
							))}
					</Container>
				</List>
			)}
		</AnimatePresence>
	);
};

export default DropdownList;
